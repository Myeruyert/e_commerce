import { Request, Response } from "express";
import User from "../models/user.model";
import { ObjectId } from "mongodb";

interface IGetUserAuthInfoRequest extends Request {
  user: any;
}

export const getCurrentUser = async (
  req: IGetUserAuthInfoRequest,
  res: Response
) => {
  try {
    const { id } = req.user;
    console.log("ID", id);
    res.status(200).json({ message: "success", user: id });
  } catch (error) {
    res.status(400).json({ message: "Error" });
  }
};
