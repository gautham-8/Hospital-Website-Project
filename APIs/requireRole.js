// requireRole("admin", "staff") — must be used after verifyToken
module.exports = (...roles) => (request, response, next) => {
    if (!roles.includes(request.user?.role)) {
        return response.status(403).send({ message: "Forbidden: insufficient role" });
    }
    next();
};
