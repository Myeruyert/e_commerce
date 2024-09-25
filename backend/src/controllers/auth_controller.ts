import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt";

//Mongoose => odm => object data mapping

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const loggedUser = await User.findOne({ email });
    console.log("loggedUser", loggedUser);
    if (!loggedUser) {
      res.status(404).json({ message: "User not found" });
    } else {
      const isChecked = bcrypt.compareSync(password, loggedUser.password);
      if (!isChecked) {
        res.status(404).json({
          message: "Хэрэглэгчийн и-мэйл эсвэл нууц үг тохирохгүй байна.",
        });
      } else {
        const token = generateToken({ id: loggedUser._id });
        res.status(201).json({ message: "Success", token });
      }
    }
    // res.status(201).json({ message: "Login Success" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Couldn't signed in" });
  }
};

export const signup = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    if (!firstname || !lastname || !email || !password) {
      return res.status(400).json({ message: "Хоосон утга байж болохгүй" });
    }
    // const hashedPassword = bcrypt.hashSync(password, 10);
    // const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      firstname,
      lastname,
      email,
      password,
      phoneNumber: "",
      address: "",
    });
    res.status(201).json({ message: "success", user: newUser });
    // console.log("pass", hashedPassword);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error });
  }
};
