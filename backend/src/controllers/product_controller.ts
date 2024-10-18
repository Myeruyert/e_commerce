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

export const getAllFilteredProducts = async (req: Request, res: Response) => {
  const { name, category, size } = req.body;
  try {
    const query: any = {};
    if (category) query.category = category;
    if (size) query.size = size;
    if (name) {
      query.name = { $regex: new RegExp(name, "i") };
    }
    const allProducts = await Product.find({ query }).populate("category");
    // const allProducts = await Product.find({}).populate("category");
    res.status(200).json({ message: "Succeed", product: allProducts });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id).populate([
      "category",
      "comment.user",
    ]);
    res.status(200).json({ message: "Succeed", product });
  } catch (error) {
    res.status(400).json({ message: "Failed to get the product", error });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const {
      name,
      price,
      description,
      isNew,
      quantity,
      category,
      size,
      discount,
      images,
    } = req.body;
    if (
      !name ||
      !price ||
      !description
      // !isNew ||
      // !quantity
      // !category ||
      // !discount ||
      // !images ||
      // !size
    ) {
      return res.status(400).json({ message: "Хоосон утга байж болохгүй" });
    }
    const newProduct = await Product.create({
      name,
      price,
      description,
      isNew,
      quantity,
      category,
      size,
      discount,
      images,
    });
    res.status(201).json({ message: "Succeed", product: newProduct });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const addComment = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const { comment, rating, user } = req.body;
    const comments = await Product.findById(productId).populate("comment.user");
    // .select("firstname");
    comments?.comment?.push({ comment, rating, user });
    const addedComment = await comments?.save();
    res
      .status(200)
      .json({ message: "Added comment successfully", addedComment });
  } catch (error) {
    console.log("Couldn't added the comment", error);
    res.status(400).json({ message: "Comment error", error });
  }
};

export const getFilteredProducts = async (req: Request, res: Response) => {
  // ["id", "id2"]
  try {
    const { category, size } = req.query;
    const filteredProducts = await Product.find({ category, size }).populate(
      "category"
    );
    res.status(200).json({ message: "Succeed", filteredProducts });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
