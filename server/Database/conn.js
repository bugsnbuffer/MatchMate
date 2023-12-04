import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const ConnectDB=async()=>{
    return await mongoose.connect(process.env.MONGOURI);
}

export default ConnectDB;