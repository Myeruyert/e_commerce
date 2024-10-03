import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getProduct,
} from "../controllers/product_controller";

const router = Router();

router.route("/products").get(getAllProducts);
router.route("/:id").get(getProduct);
router.route("/new").post(createProduct);

export default router;
