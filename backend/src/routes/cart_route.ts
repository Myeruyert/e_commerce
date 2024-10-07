import { Router } from "express";
import { getCartData, insertCartData } from "../controllers/cart_controller";
import { authentication } from "../middlewares/auth";

const router = Router();

router.route("/cart/:id").get(getCartData);
router.route("/insert").post(insertCartData);

export default router;
