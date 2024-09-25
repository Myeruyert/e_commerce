import { Router } from "express";
import {
  createProduct,
  getAllProducts,
} from "../controllers/product_controller";

const router = Router();

router.route("/products").get(getAllProducts);
router.route("/new").post(createProduct);

export default router;
