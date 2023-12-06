import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
import findOrCreate from "mongoose-findorcreate";

const userSchema = new mongoose.Schema({
  name: String,
  compatablity: {
    type: Number,
    default: 0,
  },
  intrests: [String],
  googleId: String,
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);
const User = mongoose.model("User", userSchema);

export default User;
