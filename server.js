const exp = require("express");
const app = exp();
const http = require("http");
const { Server } = require("socket.io");
const mclient=require("mongodb").MongoClient;
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const path = require('path');

app.use(cors({ origin: process.env.CLIENT_ORIGIN || true, credentials: true }));
app.use(cookieParser());

app.use(exp.static(path.join(__dirname, "./build")));

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: process.env.CLIENT_ORIGIN || true,
        credentials: true,
    },
});

// Authenticate socket connections via httpOnly JWT cookie
io.use((socket, next) => {
    const cookieHeader = socket.handshake.headers.cookie || "";
    const tokenMatch = cookieHeader.match(/(?:^|;\s*)token=([^;]+)/);
    if (!tokenMatch) {
        return next(new Error("Authentication error: no token"));
    }
    try {
        const decoded = jwt.verify(tokenMatch[1], process.env.JWT_SECRET);
        socket.user = decoded;
        next();
    } catch (err) {
        return next(new Error("Authentication error: invalid token"));
    }
});

io.on("connection", (socket) => {
    const { role, email } = socket.user;
    if (role === "staff" || role === "admin") {
        socket.join("staff-room");
        console.log(`[socket] ${email} (${role}) joined staff-room`);
    }
    socket.on("disconnect", () => {
        console.log(`[socket] ${email} disconnected`);
    });
});

app.set("io", io);

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



const passport = require("passport");
app.use(passport.initialize());

const userApp = require("./APIs/userApi");
const appointmentApp = require("./APIs/appointmentApi");
const googleAuthApp = require("./APIs/googleAuth");

app.use("/api/users", userApp);
app.use("/api/appointments", appointmentApp);
app.use("/api/auth", googleAuthApp);

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
server.listen(port, () => console.log(`server listening on port ${port}`));
