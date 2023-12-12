import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import cloudinary from "cloudinary";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";
import { matchCompatablity } from "../helpers/findMatch.js";
import { convertUri } from "../helpers/dataUri.js";

passport.use(User.createStrategy());
passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      return done(null, user);
    })
    .catch(() => {
      done(err, null);
    });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLEID,
      clientSecret: process.env.GOOGLESECRET,
      callbackURL: "http://localhost:3000/auth/google/callback",
      scope: ["profile", "email"],
    },
    function (accessToken, refreshToken, profile, cb) {
      console.log(profile.photos[0].value);
      User.findOrCreate(
        { googleId: profile._json.sub },
        {
          googleId: profile._json.sub,
          username: profile._json.name,
          email: profile._json.email,
          imageUrl:profile._json.picture

        },
        function (err, user) {
          return cb(err, user);
        }
      );
    }
  )
);

export const logoutUser = asyncHandler(async (req, res) => {
  req.logout(() => {
    res.send("logged out successfully");
  });
});

const findCompatiblity = asyncHandler(async (req, res) => {
  const { id1, id2 } = req.params;

  const user1 = await User.findById(id1);
  const user2 = await User.findById(id2);

  const checkedUser = matchCompatablity(user1, user2);
  res.status(200).json(checkedUser);
});

const createUser = asyncHandler(async (req, res) => {
  const { name, intrests } = req.body;

  const user = await User.create({
    name,
    intrests,
  });

  res.status(200).json(user);
});

const updateUser = asyncHandler(async (req, res) => {
  const { userid } = req.params;
  const uploadFields = {}
  const allowedFields = [
    'firstName',
    'lastName',
    'gender',
    'age',
    'intrests',
    'preferences',
    'employmentStatus',
    'educationLevel',
    
  ]

  allowedFields.forEach((field)=>{
   if(req.body[field] !== undefined){
    uploadFields[field] = req.body[field]
   }
  })

  


  try {
   
    if(req.file !== undefined){
      const img = convertUri(req.file);
  
      const myCloud = await cloudinary.v2.uploader.upload(img.content);
      uploadFields['imageUrl'] = myCloud.secure_url
      console.log(myCloud.secure_url);
    }

   
    const user = await User.findByIdAndUpdate(userid, uploadFields, { new: true });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

   
    res.status(200).json({ message: 'User updated successfully', user });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }

});



export { findCompatiblity, createUser, updateUser };
