import { Router } from "express";
import {
  deleteCartData,
  getCartData,
  insertCartData,
  updateCartData,
} from "../controllers/cart_controller";
import { authentication } from "../middlewares/auth";

const router = Router();

router.route("/get").get(authentication, getCartData);
router.route("/insert").post(authentication, insertCartData);
router.route("/delete").delete(authentication, deleteCartData);
router.route("/update").put(authentication, updateCartData);

export default router;
