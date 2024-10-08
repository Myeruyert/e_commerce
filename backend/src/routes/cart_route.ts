import { Router } from "express";
import {
  deleteCartData,
  getCartData,
  insertCartData,
} from "../controllers/cart_controller";
import { authentication } from "../middlewares/auth";

const router = Router();

router.route("/").get(authentication, getCartData);
router.route("/insert").post(insertCartData);
router.route("/delete").delete(authentication, deleteCartData);

export default router;
