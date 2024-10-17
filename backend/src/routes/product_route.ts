import { Router } from "express";
import {
  addComment,
  createProduct,
  getAllProducts,
  getFilteredProducts,
  getProduct,
} from "../controllers/product_controller";

const router = Router();

router.route("/").get(getAllProducts);
router.route("/search/:category").get(getFilteredProducts);
router.route("/:id").get(getProduct);
router.route("/new").post(createProduct);
router.route("/comment/:productId").post(addComment);

export default router;
