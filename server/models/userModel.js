import mongoose from "mongoose"



const userSchema = new mongoose.Schema(
    {
        name:String,
        compatablity:{
            type:Number,
            default:0
        },
        intrests:[String]


    }
)


const User = mongoose.model("User",userSchema)


export default User