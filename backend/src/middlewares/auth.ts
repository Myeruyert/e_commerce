import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const JWT_TOKEN_PASS = process.env.JWT_TOKEN_PASS;

interface IMyRequest extends Request {
  user: any;
}

export const authentication = (
  req: IMyRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    // console.log("user", req.user);
    if (!req.headers.authorization) {
      return res.status(401).json({ message: "Please sign In first" });
    }
    const token = req.headers.authorization?.split(" ")[1];
    const user = jwt.verify(token, `${JWT_TOKEN_PASS}`); //user dotor {id: uuid} orson bga
    req.user = user; // {id : ""}
    next();
  } catch (error) {
    console.log("cattt", error);
    res.status(400).json({ message: "Please sign In first" });
  }
};
