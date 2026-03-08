const jwt = require("jsonwebtoken");

function verifyToken(request, response, next) {
    const token = request.cookies?.token;
    if (!token) {
        return response.status(401).send({ message: "Access denied: no token provided" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        request.user = decoded;
        next();
    } catch (err) {
        return response.status(401).send({ message: "Access denied: invalid or expired token" });
    }
}

module.exports = verifyToken;
