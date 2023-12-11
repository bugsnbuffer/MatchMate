import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
import findOrCreate from "mongoose-findorcreate";

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  firstName: String,
  lastName: String,
  imageUrl:String,
  age: Number,
  gender: String,
  educationLevel: String,
  employmentStatus: String,
  places: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Place' }],
  preferences: {
    cleanliness: String,
    dietary: String,
    smokingAlcohol: String,
    sleepingHabits: String,
    social: String,
  },

  intrests: [String],
  googleId: String,
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);
const User = mongoose.model("User", userSchema);

export default User;
