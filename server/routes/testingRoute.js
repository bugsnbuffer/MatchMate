import express from "express"
import { createUser, findCompatiblity } from "../controllers/userController.js"


const router = express.Router()


router.get("/compatiblity/:id",findCompatiblity)
router.post("/create",createUser)



export default router