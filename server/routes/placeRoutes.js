import express from "express"
import multer from "multer";
import { createPlace } from "../controllers/placeController.js";


const storage = multer.memoryStorage()
const upload = multer({ storage });

const router=express.Router();

router.post('/create',upload.array("images",3),createPlace)


export default router