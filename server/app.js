import express from "express";
import ConnectDB from "./Database/conn.js";
import User from "./Models/UserModel.js";

const app=express();

app.get('/',(req,res)=>{
    res.send("hello mates");
})

app.get("/user/:name",(req,res)=>{
    const {name}=req.params;
    const user =new User({name});
    user.save().then(()=>res.send("user saved"))
})


ConnectDB().then(()=>{
    app.listen(3000,()=>{
        console.log("server started at port 3000");
    })
})