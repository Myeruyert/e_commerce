const { Router } = require("express");
import { getCurrentUser } from "../controllers/user_controller";
import { authentication } from "../middlewares/auth";

const router = Router();

// router.get();
router.route("/user").get(authentication, getCurrentUser);

export default router;
