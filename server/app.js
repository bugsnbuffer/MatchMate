import express from "express";
import ConnectDB from "./database/conn.js";
import userRoutes from "./routes/testingRoute.js"
import authRoutes from "./routes/auth.js"
import placeRoutes from "./routes/placeRoutes.js"
import session from "express-session"
import passport from "passport";
import cloudinary from "cloudinary"
import dotenv from "dotenv"

dotenv.config()
cloudinary.v2.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
})
const app=express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.get('/',(req,res)=>{
    res.send("hello mates")
})





// ----------------------------initialize passport---------------------
app.use(session({
    saveUninitialized:true,
    resave:false,
    secret:process.env.SECRET,
    cookie:{
        secure:false,
        sameSite:"none"
    }
}))

app.use(passport.initialize());
app.use(passport.session());


// -------------------------routes here----------------------

app.use("/api",userRoutes)
app.use("/auth",authRoutes)
app.use("/place",placeRoutes)

ConnectDB().then(()=>{
    app.listen(3000,()=>{
        console.log("server started at port 3000");
    })
})


