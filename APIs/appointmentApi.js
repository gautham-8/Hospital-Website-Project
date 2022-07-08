//router
const exp = require("express");
const appointmentApp = exp.Router();
const expressAsyncHandler = require("express-async-handler");
const ObjectId = require('mongodb').ObjectID;
// require("dotenv").config();

// extract body of request
appointmentApp.use(exp.json());

appointmentApp.get("/getappointments", expressAsyncHandler(async (request, response) =>{
        let appointmentCollectionObject = request.app.get("appointmentCollectionObject");
        //get all users
        let appointments=await appointmentCollectionObject.find().toArray();
        //send res
        response.send ({ message: "Appointment list", payload: appointments });
        })
);

appointmentApp.post("/book-appointment", expressAsyncHandler(async (request, response) => {
        let appointmentCollectionObject = request.app.get("appointmentCollectionObject");
        let newAppointmentObj = request.body;
        await appointmentCollectionObject.insertOne(newAppointmentObj);
        response.send({ message: "New Appointment booked" });
        })
);

appointmentApp.get("/get-my-appointments/:email", expressAsyncHandler(async (request, response) => {
                let appointmentCollectionObj = request.app.get("appointmentCollectionObject");
                let appointmentEmail = request.params.email;

                let appointmentsDb = await appointmentCollectionObj.find({
                        email: appointmentEmail
                }).toArray();

                // console.log(appointmentsDb)
                
                if (appointmentsDb == null) {
                        response.send({ message: "No appointments found" });
                } 
                else {
                        response.send({ message: "successfully added",payload: appointmentsDb });
                }
        })
);      

appointmentApp.delete("/delete-appointment/:id", expressAsyncHandler(async (request, response)=>{
                let appointmentCollectionObj = request.app.get("appointmentCollectionObject");
                let appointmentId = request.params.id;
                // console.log(typeof(appointmentId));

                // let appointmentsDb = await appointmentCollectionObj.find({
                //         _id: appointmentId
                // }).toArray();

                let appointmentsDb = await appointmentCollectionObj.deleteMany({
                        _id: ObjectId(appointmentId)
                }).toArray();

                console.log(appointmentsDb)
                
                if (appointmentsDb == null) {
                        response.send({ message: "No appointments found" });
                } 
                else {
                        response.send({ message: "successfully deleted",payload: appointmentsDb });
                }
        })
)

module.exports = appointmentApp;