import { Router } from "express";
import {
  addComment,
  createProduct,
  getAllProducts,
  getProduct,
} from "../controllers/product_controller";

const router = Router();

router.route("/").get(getAllProducts);
router.route("/:id").get(getProduct);
router.route("/new").post(createProduct);
router.route("/comment/:productId").post(addComment);

export default router;
