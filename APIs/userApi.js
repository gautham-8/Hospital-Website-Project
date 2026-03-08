const exp = require("express");
const userApp = exp.Router();
const expressAsyncHandler = require("express-async-handler");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const rateLimit = require("express-rate-limit");
const { body, validationResult } = require("express-validator");
const verifyToken = require("./verifyToken");
require("dotenv").config();

userApp.use(exp.json());

const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10,
    message: { message: "Too many login attempts. Please try again in 15 minutes." },
    standardHeaders: true,
    legacyHeaders: false,
});

// GET all users (admin only)
userApp.get("/", verifyToken, expressAsyncHandler(async (request, response) => {
    let userCollectionObject = request.app.get("userCollectionObject");
    if (!userCollectionObject) return response.status(503).send({ message: "Database not available" });
    let users = await userCollectionObject.find({}, { projection: { password: 0 } }).toArray();
    response.send({ message: "Users list", payload: users });
}));

// POST /login
userApp.post(
    "/login",
    loginLimiter,
    [
        body("email").isEmail().withMessage("Valid email is required"),
        body("password").notEmpty().withMessage("Password is required"),
    ],
    expressAsyncHandler(async (request, response) => {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).send({ message: errors.array()[0].msg });
        }

        let userCollectionObject = request.app.get("userCollectionObject");
        if (!userCollectionObject) return response.status(503).send({ message: "Database not available. Please try again shortly." });

        let userOfDB = await userCollectionObject.findOne({ email: request.body.email });
        if (userOfDB == null) {
            return response.status(401).send({ message: "Invalid email or password" });
        }

        let status = await bcryptjs.compare(request.body.password, userOfDB.password);
        if (!status) {
            return response.status(401).send({ message: "Invalid email or password" });
        }

        const role = userOfDB.role || "user";
        const token = jwt.sign(
            { email: userOfDB.email, role },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        response.cookie("token", token, {
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV === "production",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        response.send({
            message: "success",
            userObj: { email: userOfDB.email, role, phone: userOfDB.phone },
        });
    })
);

// POST /logout
userApp.post("/logout", (_, response) => {
    response.clearCookie("token", { httpOnly: true, sameSite: "strict" });
    response.send({ message: "Logged out" });
});

// GET /me — returns current user info from cookie session
userApp.get("/me", verifyToken, expressAsyncHandler(async (request, response) => {
    let userCollectionObject = request.app.get("userCollectionObject");
    if (!userCollectionObject) return response.status(503).send({ message: "Database not available" });

    let user = await userCollectionObject.findOne(
        { email: request.user.email },
        { projection: { password: 0 } }
    );
    if (!user) return response.status(404).send({ message: "User not found" });

    response.send({ email: user.email, role: user.role || "user", phone: user.phone });
}));

// POST / — register new user (or add staff if called by admin)
userApp.post(
    "/",
    [
        body("email").isEmail().withMessage("Valid email is required"),
        body("password").isLength({ min: 8 }).withMessage("Password must be at least 8 characters"),
        body("phone").notEmpty().withMessage("Phone is required"),
        body("city").notEmpty().withMessage("City is required"),
    ],
    expressAsyncHandler(async (request, response) => {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).send({ message: errors.array()[0].msg });
        }

        let userCollectionObject = request.app.get("userCollectionObject");
        if (!userCollectionObject) return response.status(503).send({ message: "Database not available. Please try again shortly." });

        const { email, password, phone, city } = request.body;

        let existing = await userCollectionObject.findOne({ email });
        if (existing !== null) {
            return response.status(409).send({ message: "Email already exists!" });
        }

        // Determine role: admin callers create staff; everyone else creates regular users
        let role = "user";
        const cookieToken = request.cookies?.token;
        if (cookieToken) {
            try {
                const decoded = jwt.verify(cookieToken, process.env.JWT_SECRET);
                if (decoded.role === "admin") role = "staff";
            } catch (_) { /* not authenticated — treat as public signup */ }
        }

        const hashedPassword = await bcryptjs.hash(password, 12);
        await userCollectionObject.insertOne({ email, password: hashedPassword, phone, city, role });
        response.status(201).send({ message: "New User created" });
    })
);

module.exports = userApp;
