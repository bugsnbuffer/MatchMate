import express from "express";
import ConnectDB from "./database/conn.js";
import userRoutes from "./routes/testingRoute.js"
import authRoutes from "./routes/auth.js"
import session from "express-session"
import passport from "passport";

const app=express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.get('/',(req,res)=>{
    res.send("hello mates")
})


app.get('/user',(req,res)=>{
    res.send("hello user")
})


// ----------------------------initialize passport---------------------
app.use(session({
    saveUninitialized:false,
    resave:false,
    secret:process.env.SECRET
}))

app.use(passport.initialize());
app.use(passport.session());


// -------------------------routes here----------------------
app.use("/api",userRoutes)
app.use("/auth",authRoutes)

ConnectDB().then(()=>{
    app.listen(3000,()=>{
        console.log("server started at port 3000");
    })
})


