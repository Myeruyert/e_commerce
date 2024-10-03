import { Request, Response } from "express";
import Product from "../models/product.model";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const allProducts = await Product.find({}).populate("category");
    res.status(200).json({ message: "Succeed", product: allProducts });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id).populate("category");
    res.status(200).json({ message: "Succeed", product });
  } catch (error) {
    res.status(400).json({ message: "Failed to get the product", error });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, description, isNewProduct, quantity, category, size } =
      req.body;
    if (
      !name ||
      !price ||
      !description ||
      !isNewProduct ||
      !quantity ||
      !category
    ) {
      return res.status(400).json({ message: "Хоосон утга байж болохгүй" });
    }
    const newProduct = await Product.create({
      name,
      price,
      description,
      isNewProduct,
      quantity,
      category,
      size,
    });
    res.status(201).json({ message: "Succeed", product: newProduct });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
