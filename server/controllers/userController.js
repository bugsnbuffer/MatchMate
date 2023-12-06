import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import { checkCompatibility } from "../helpers/findMatch.js";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";


passport.use(User.createStrategy());
passport.serializeUser((user,done)=>{
  done(null,user);
})

passport.deserializeUser((id, done) => {
  User.findById(id).then(()=>{
    done(null,user);
  }).catch(()=>{
    done(err,null);
  }) 
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
      User.findOrCreate({googleId:profile._json.sub},
        {
          googleId: profile._json.sub,
          username: profile._json.name,
          email: profile._json.email,
        },
        function (err, user) {
          return cb(err, user);
        }
      );
    }
  )
);

export const logoutUser=asyncHandler(async(req,res)=>{
   req.logOut().then(()=>{
    res.send("logged out")
  });
})

const findCompatiblity = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const userToCompare = await User.findById(id);
  const users = await User.find({})
   console.log(userToCompare,users)
  const checkedUser = checkCompatibility(userToCompare,users)
  res.status(200).json(checkedUser)
});

const createUser = asyncHandler(async (req, res) => {
  const { name, intrests } = req.body;

  const user = await User.create({
    name,
    intrests,
  });

  res.status(200).json(user);
});

export { findCompatiblity, createUser };
