import passport from "passport";
import express from "express";

const router=express.Router();

router.get('/google/callback',
    passport.authenticate("google",{
    
        successRedirect:"http://localhost:5173/home",
        failureRedirect:"http://localhost:5173/"
    })
)

export default router;