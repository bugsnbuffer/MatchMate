import passport from "passport";
import express from "express";

const router=express.Router();

router.get('/google/callback',
    passport.authenticate("google",{
        successRedirect:"http://localhost:3000/api/home",
        failureRedirect:"http://localhost:3000/"
    })
)

export default router;