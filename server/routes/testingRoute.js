import express from "express"
import { createUser, findCompatiblity } from "../controllers/userController.js"


const router = express.Router()


router.get("/compatiblity/:id",findCompatiblity)
router.post("/create",createUser)

router.get('/home',(req,res)=>res.status(200).send("you logged in successfully"))



export default router