import { Router } from "express";
import {
  login,
  signup,
  sendRecoverEmail,
  verifyOtp,
  verifyPassword,
} from "../controllers/auth_controller";

const router = Router();

router.route("/verify-password").post(verifyPassword);
router.route("/resend-pass").post(sendRecoverEmail);
router.route("/verify-otp").post(verifyOtp);
router.route("/login").post(login);
router.route("/signup").post(signup);

export default router;
