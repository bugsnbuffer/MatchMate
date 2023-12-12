import asyncHandler from "express-async-handler";
import Place from "../models/placeModel.js";

import cloudinary from "cloudinary";
import User from "../models/userModel.js";

const createPlace = asyncHandler(async (req, res) => {
  try {
    const _id = req.user;
    const {
      description,
      budget,
      coordinates,
      hasFurniture,
      hasKitchen,
      address,
    } = req.body;

    const files = req.files;

    const user = await User.findById(_id);
    if (!user) {
      res.status(404).json({ message: "user not found" });
    }

    const uploadPromises = files.map((file) => {
      return new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream((result, error) => {
            if (error) {
              console.error("Cloudinary upload error:", error);
              reject(
                `Failed to upload to Cloudinary: ${error.message || error}`
              );
            } else {
              console.log("Cloudinary upload result:", result);
              resolve(result.secure_url);
            }
          })
          .end(file.buffer);
      });
    });

    const results = await Promise.all(uploadPromises);

    const place = await Place.create({
      description,
      budget,
      hasFurniture,
      hasKitchen,
      location: {
        type: "Point",
        coordinates: coordinates,
      },
      address,
      imgUrls: [...results],
    });

    if (place) {
      user.places.push(place._id);
      await user.save();
      res.status(200).json(place);
    }
  } catch (error) {
    console.error("Error in createPlace:", error);
    res
      .status(500)
      .json({ error: "Failed to process files or upload to Cloudinary" });
  }
});

export { createPlace };
