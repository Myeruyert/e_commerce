import { Request, Response } from "express";
import User from "../models/user.model";
import { ObjectId } from "mongodb";
export const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const id = ObjectId.toString();
    console.log("ID", id);
    res.status(200).json({ message: "success", user: id });
  } catch (error) {
    res.status(400).json({ message: "Error" });
  }
};
