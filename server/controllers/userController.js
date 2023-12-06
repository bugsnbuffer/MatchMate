import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const findCompatiblity = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const userToCompare = await User.findById(id);
  const users = await User.find({})

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
