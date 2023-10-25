import express from "express";
import signupDetails from "../../controllers/auth/signup.js";
import login from "../../controllers/auth/login.js";

const router = express.Router();

router.route("/signup").post(signupDetails);
router.route("/login").post(login);

export default router;
