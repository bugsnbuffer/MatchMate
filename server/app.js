import express from "express";
import ConnectDB from "./database/conn.js";
import userRoutes from "./routes/testingRoute.js"
import { checkCompatibility } from "./helpers/findMatch.js";

const app=express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/api",userRoutes)

app.get('/',(req,res)=>{
    res.send("hello mates")
})


app.get('/user',(req,res)=>{
    res.send("hello user")
})

ConnectDB().then(()=>{
    app.listen(3000,()=>{
        console.log("server started at port 3000");
    })
})


const userToMatch = {
    name:"sourabh",
    bio:"iam a mern develope",
    interest:new Set(["football","cricket","dancing"])
  };
  const usersArray = [  {
    name:"lukmaan",
    bio:"iam a programmer",
    interest:new Set(["football","cricket","singing"])
  },
  {
    name:"sourabh",
    bio:"iam a mern develope",
    interest:new Set(["football","cricket","dancing"])
  },
  {
    name:"xyz",
    bio:"iam a anything",
    interest:new Set(["baseball","guitar","singing"])
  },
  {
    name:"abc",
    bio:"iam a anything",
    interest:new Set(["football","cricket","dancing"])
  }];
  
  console.log(checkCompatibility(userToMatch, usersArray));