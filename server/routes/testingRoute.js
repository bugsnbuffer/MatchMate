import express from "express"
import { createUser, findCompatiblity, logoutUser } from "../controllers/userController.js"


const router = express.Router()


router.get("/compatiblity/:id",findCompatiblity)
router.post("/create",createUser)
router.get('/logout',logoutUser)

router.get('/home',(req,res)=>res.status(200).send("you logged in successfully"))



export default router