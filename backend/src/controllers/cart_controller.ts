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
  //   try {
  //     const cartData = await Cart.find({}).populate("user");
  //     res.status(200).json({ message: "Get cart data successfully", cartData });
  //   } catch (error) {
  //     res.status(400).json({ message: "Failed to get the cart data", error });
  //     console.log("Error: Failed to get the cart data", error);
  //   }
};
