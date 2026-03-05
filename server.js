const exp = require("express");
const app = exp();
const mclient=require("mongodb").MongoClient;
const cors = require("cors");

require("dotenv").config();

const path = require('path');

app.use(cors());

app.use(exp.static(path.join(__dirname, "./build")));

const DBurl = process.env.MONGO_URI;

mclient.connect(DBurl)
.then((client)=>{

    let dbObj=client.db("hospitalWebsite");
    let userCollectionObject=dbObj.collection("usercollection");
    let appointmentCollectionObject = dbObj.collection("appointmentcollection");

    app.set("userCollectionObject",userCollectionObject);
    app.set("appointmentCollectionObject",appointmentCollectionObject);

    console.log("DB connection success")
})
.catch(err=>console.log('Error in DB connection ',err))



const userApp = require("./APIs/userApi");
const appointmentApp = require("./APIs/appointmentAPI");

app.use("/user-api", userApp);
app.use("/appointment-api", appointmentApp);

app.use('*',(request, response) => {
    response.sendFile(path.join(__dirname,'./build/index.html'));
});


app.use((request, response, next) => {
    response.status(404).send({ message: `path ${request.url} is invalid` });
});
app.use((error, request, response, next) => {
    response.status(500).send({ message: "Error occurred", reason: `${error.message}` });
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`server listening on port ${port}`));