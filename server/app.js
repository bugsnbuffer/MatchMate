import express from "express";
import ConnectDB from "./database/conn.js";


const app=express();

app.get('/',(req,res)=>{
    res.send("hello mates")
})


ConnectDB().then(()=>{
    app.listen(3000,()=>{
        console.log("server started at port 3000");
    })
})