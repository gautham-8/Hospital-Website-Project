//router
const exp = require("express");
const userApp = exp.Router();
const expressAsyncHandler = require("express-async-handler");
//bcryptjs for password hashing
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const verifyToken = require("./verifyToken");
require("dotenv").config();

// extract body of request
userApp.use(exp.json());

userApp.get("/", verifyToken, expressAsyncHandler(async (request, response) =>{
        let userCollectionObject = request.app.get("userCollectionObject");
        if (!userCollectionObject) return response.status(503).send({ message: "Database not available" });
        let users=await userCollectionObject.find().toArray();
        response.send ({ message: "Users list", payload: users });
        })
);

userApp.post("/login", expressAsyncHandler(async (request, response) => {
        let userCollectionObject = request.app.get("userCollectionObject");
        if (!userCollectionObject) return response.status(503).send({ message: "Database not available. Please try again shortly." });
        let userCredObj = request.body;

        let userOfDB = await userCollectionObject.findOne({
            email: userCredObj.email
        });

        if (userOfDB == null) {
            return response.status(401).send({ message: "Invalid user" });
        }

        let status = await bcryptjs.compare(userCredObj.password, userOfDB.password);
        if (status == false) {
            return response.status(401).send({ message: "Invalid password" });
        }

        let token = jwt.sign(
            { email: userOfDB.email },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );
        response.send({
            message: "success",
            payload: token,
            userObj: userOfDB,
        });
        })
    );

userApp.post("/", expressAsyncHandler(async (request, response) => {
        let userCollectionObject = request.app.get("userCollectionObject");
        if (!userCollectionObject) return response.status(503).send({ message: "Database not available. Please try again shortly." });
        let newUserObj = request.body;
        let userOfDB = await userCollectionObject.findOne({
            email: newUserObj.email,
        });
        if (userOfDB !== null) {
            return response.status(409).send({
                message: "Email already exists!",
            });
        }
        let hashedPassword = await bcryptjs.hash(newUserObj.password, 6);
        newUserObj.password = hashedPassword;
        await userCollectionObject.insertOne(newUserObj);
        response.status(201).send({ message: "New User created" });
    })
);

module.exports = userApp;
