import express from "express"
import { createUser, findCompatiblity, logoutUser, updateUser } from "../controllers/userController.js"
import { singleUpload } from "../helpers/multer.js"
import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router()


router.get("/compatiblity/:id1/:id2",findCompatiblity)
router.put("/updateuser/:userid",singleUpload,updateUser)
router.get('/logout',logoutUser)

router.get('/home',(req,res)=>res.status(200).send(`${req.user.username} you have logged in successfully`))





export default router