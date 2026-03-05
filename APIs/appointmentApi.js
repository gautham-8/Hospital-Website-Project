//router
const exp = require("express");
const appointmentApp = exp.Router();
const expressAsyncHandler = require("express-async-handler");
const { ObjectId } = require('mongodb');
const verifyToken = require("./verifyToken");
require("dotenv").config();

// extract body of request
appointmentApp.use(exp.json());

appointmentApp.get("/getappointments", verifyToken, expressAsyncHandler(async (request, response) =>{
        let appointmentCollectionObject = request.app.get("appointmentCollectionObject");
        let appointments=await appointmentCollectionObject.find().toArray();
        response.send ({ message: "Appointment list", payload: appointments });
        })
);

appointmentApp.post("/book-appointment", expressAsyncHandler(async (request, response) => {
        let appointmentCollectionObject = request.app.get("appointmentCollectionObject");
        let newAppointmentObj = request.body;
        await appointmentCollectionObject.insertOne(newAppointmentObj);
        response.status(201).send({ message: "New Appointment booked" });
        })
);

appointmentApp.get("/get-my-appointments/:email", verifyToken, expressAsyncHandler(async (request, response) => {
                let appointmentCollectionObj = request.app.get("appointmentCollectionObject");
                let appointmentEmail = request.params.email;

                let appointmentsDb = await appointmentCollectionObj.find({
                        email: appointmentEmail
                }).toArray();

                response.send({ message: "Appointments fetched", payload: appointmentsDb });
        })
);

appointmentApp.delete("/delete-appointment/:id", verifyToken, expressAsyncHandler(async (request, response)=>{
                let appointmentCollectionObj = request.app.get("appointmentCollectionObject");
                let appointmentId = request.params.id;

                let result = await appointmentCollectionObj.deleteOne({
                        _id: new ObjectId(appointmentId)
                });

                if (result.deletedCount === 0) {
                        response.status(404).send({ message: "No appointment found with that ID" });
                } else {
                        response.send({ message: "Successfully deleted" });
                }
        })
)

module.exports = appointmentApp;
