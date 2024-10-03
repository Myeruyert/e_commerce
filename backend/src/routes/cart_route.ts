import { Router } from "express";
import { getCartData } from "../controllers/cart_controller";

const router = Router();

router.route("/:id").get(getCartData);

export default router;
