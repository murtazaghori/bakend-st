import express from "express"
import { signupcontroller } from "../controller/signupcontroller.js"
import { logincontroller } from "../controller/logincontroller.js";
import { getalluser } from "../controller/getalluser.js";
import { tokenVerification } from "../middlewear/middlewear.js";

const router =express.Router()

router.route("/api/signup").post(signupcontroller);
router.route("/api/login").post(logincontroller);
router.route("/api/get").get( tokenVerification ,getalluser)

export default router