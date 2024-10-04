import { Request, Response } from "express";
import Cart from "../models/cart.model";

export const getCartData = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const cartData = await Cart.findById(id).populate("user");
    res.status(200).json({ message: "Get cart data successfully", cartData });
  } catch (error) {
    res.status(400).json({ message: "Failed to get the cart data", error });
    console.log("Error: Failed to get the cart data", error);
  }
  // console.log("first");
  // try {
  //   const cartData = await Cart.find({});
  //   res.status(200).json({ message: "Get cart data successfully", cartData });
  // } catch (error) {
  //   console.log("Error: Failed to get the cart data", error);
  //   res.status(400).json({ message: "Failed to get the cart data", error });
  // }
};

export const insertCartData = async (req: Request, res: Response) => {
  try {
    const { name, price, image, quantity, discount, user } = req.body;
    // console.log("nnn", name);
    if (!name || !price || !image) {
      return res.status(400).json({ message: "Хоосон утга байж болохгүй" });
    }
    const cartData = await Cart.create({
      name,
      price,
      image,
      quantity,
      discount,
      user,
    });
    res.status(200).json({ message: "Inserted data successfully", cartData });
  } catch (error) {
    console.log("Insert cart data error", error);
    res.status(500).json({ message: "Server error", error: error });
  }
};
