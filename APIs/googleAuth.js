const exp = require("express");
const googleAuthApp = exp.Router();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const jwt = require("jsonwebtoken");
require("dotenv").config();

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL || "http://localhost:4000/api/auth/google/callback",
            passReqToCallback: true,
        },
        async (req, _accessToken, _refreshToken, profile, done) => {
            try {
                const userCollectionObject = req.app.get("userCollectionObject");
                const email = profile.emails?.[0]?.value;
                if (!email) {
                    return done(null, false, { message: "No email found in Google profile" });
                }

                let user = await userCollectionObject.findOne({ email });
                if (!user) {
                    user = {
                        email,
                        googleId: profile.id,
                        phone: "",
                        city: "",
                        role: "user",
                    };
                    await userCollectionObject.insertOne(user);
                } else if (!user.googleId) {
                    await userCollectionObject.updateOne(
                        { email },
                        { $set: { googleId: profile.id } }
                    );
                }

                return done(null, { email: user.email, role: user.role || "user", phone: user.phone });
            } catch (err) {
                return done(err);
            }
        }
    )
);

googleAuthApp.get(
    "/google",
    passport.authenticate("google", { scope: ["profile", "email"], session: false })
);

googleAuthApp.get(
    "/google/callback",
    passport.authenticate("google", { session: false, failureRedirect: "/login?error=google" }),
    (req, res) => {
        const token = jwt.sign(
            { email: req.user.email, role: req.user.role },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV === "production",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.redirect("/");
    }
);

module.exports = googleAuthApp;
