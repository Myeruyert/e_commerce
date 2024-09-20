import { Request, Response } from "express";
import User from "../models/user.model";
const bcrypt = require("bcrypt");

//Mongoose => odm => object data mapping

export const login = (req: Request, res: Response) => {
  res.status(201).json({ message: "Login Success" });
};

export const signup = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    if (!firstname || !lastname || !email || !hashedPassword) {
      res.status(400).json({ message: "Хоосон утга байж болохгүй" });
    }
    const newUser = await User.create({
      firstname,
      lastname,
      email,
      hashedPassword,
      phoneNumber: "",
      address: "",
    });
    res.status(201).json({ message: "success", user: newUser });
    console.log("pass", hashedPassword);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error });
  }
};
