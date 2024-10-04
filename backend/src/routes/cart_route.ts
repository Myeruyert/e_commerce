import { Router } from "express";
import { getCartData, insertCartData } from "../controllers/cart_controller";

const router = Router();

router.route("/cart/:id").get(getCartData);
router.route("/insert").post(insertCartData);

export default router;
