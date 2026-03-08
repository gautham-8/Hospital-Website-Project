const exp = require("express");
const appointmentApp = exp.Router();
const expressAsyncHandler = require("express-async-handler");
const { ObjectId } = require("mongodb");
const { body, validationResult } = require("express-validator");
const verifyToken = require("./verifyToken");
const requireRole = require("./requireRole");
require("dotenv").config();

appointmentApp.use(exp.json());

const VALID_SPECIALIZATIONS = ["general", "pediatric", "orthopedic", "cardio"];

const appointmentValidation = [
    body("name").isLength({ min: 3 }).withMessage("Name must be at least 3 characters"),
    body("specialization").isIn(VALID_SPECIALIZATIONS).withMessage("Invalid specialization"),
    body("datetime").isISO8601().withMessage("Invalid datetime"),
];

// GET all appointments — admin/staff only
appointmentApp.get(
    "/",
    verifyToken,
    requireRole("admin", "staff"),
    expressAsyncHandler(async (request, response) => {
        let appointmentCollectionObject = request.app.get("appointmentCollectionObject");
        let appointments = await appointmentCollectionObject.find().toArray();
        response.send({ message: "Appointment list", payload: appointments });
    })
);

// GET current user's own appointments (email inferred from JWT)
appointmentApp.get(
    "/mine",
    verifyToken,
    expressAsyncHandler(async (request, response) => {
        let appointmentCollectionObject = request.app.get("appointmentCollectionObject");
        let appointments = await appointmentCollectionObject
            .find({ email: request.user.email })
            .toArray();
        response.send({ message: "Appointments fetched", payload: appointments });
    })
);

// POST — book appointment (must be logged in)
appointmentApp.post(
    "/",
    verifyToken,
    appointmentValidation,
    expressAsyncHandler(async (request, response) => {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).send({ message: errors.array()[0].msg });
        }

        let appointmentCollectionObject = request.app.get("appointmentCollectionObject");
        const { name, specialization, datetime, phone } = request.body;

        // Email comes from JWT — never trust the body
        await appointmentCollectionObject.insertOne({
            name,
            specialization,
            datetime,
            phone,
            email: request.user.email,
        });
        response.status(201).send({ message: "New Appointment booked" });
    })
);

// DELETE — admin/staff can delete any; regular user can only delete their own
appointmentApp.delete(
    "/:id",
    verifyToken,
    expressAsyncHandler(async (request, response) => {
        let appointmentCollectionObject = request.app.get("appointmentCollectionObject");
        const appointmentId = request.params.id;

        const appointment = await appointmentCollectionObject.findOne({
            _id: new ObjectId(appointmentId),
        });

        if (!appointment) {
            return response.status(404).send({ message: "No appointment found with that ID" });
        }

        const isPrivileged = request.user.role === "admin" || request.user.role === "staff";
        if (!isPrivileged && appointment.email !== request.user.email) {
            return response.status(403).send({ message: "Forbidden: not your appointment" });
        }

        await appointmentCollectionObject.deleteOne({ _id: new ObjectId(appointmentId) });
        response.send({ message: "Successfully deleted" });
    })
);

module.exports = appointmentApp;
