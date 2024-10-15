import { Router } from "express";
import {
  addToWishList,
  deleteFromWishList,
  getWishlistData,
} from "../controllers/wishlist_controller";
import { authentication } from "../middlewares/auth";

const router = Router();

router.route("/get").get(authentication, getWishlistData);
router.route("/add").post(authentication, addToWishList);
router.route("/delete").delete(authentication, deleteFromWishList);

export default router;
