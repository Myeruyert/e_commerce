import { Router } from "express";
import { login, signup, sendemail } from "../controllers/auth_controller";

const router = Router();

router.route("/login").post(login);
router.route("/signup").post(signup);
router.route("/resendpass").post(sendemail);

export default router;
