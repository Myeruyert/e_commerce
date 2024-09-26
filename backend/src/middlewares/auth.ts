import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
// import dotenv from "dotenv";
import { decodeToken } from "../utils/jwt";
// dotenv.config();

// const JWT_TOKEN_PASS = process.env.JWT_TOKEN_PASS;

// interface IMyRequest extends Request {
//   user: string | object;
// }

declare global {
  namespace Express {
    interface Request {
      user: string | object;
    }
  }
}

export const authentication = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // console.log("user", req.user);
    if (!req.headers.authorization) {
      return res.status(401).json({ message: "Please sign In first" }); //return hiihgui bol baihgui bsn ch dood taliin req.headers.auhtorization code ni ajillah geed bdg buyu hooson uyed ajillah geed aldaa zaana
    }
    const token = req.headers.authorization?.split(" ")[1];
    const user = decodeToken(token); //user dotor {id: uuid} orson bga
    req.user = user; // {id : ""}
    next();
  } catch (error) {
    console.log("cattt", error);
    res.status(400).json({ message: "Please sign In first" });
  }
};
