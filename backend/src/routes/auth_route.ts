import { Router } from "express";
import {
  login,
  signup,
  sendRecoverEmail,
  verifyOtp,
  verifyPassword,
  getCurrentUser,
} from "../controllers/auth_controller";
import { authentication } from "../middlewares/auth";

const router = Router();

router.route("/verify-password").post(verifyPassword);
router.route("/resend-pass").post(sendRecoverEmail);
router.route("/verify-otp").post(verifyOtp);
router.route("/user").get(authentication, getCurrentUser);
router.route("/login").post(login);
router.route("/signup").post(signup);

export default router;
