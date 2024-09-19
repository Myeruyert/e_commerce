console.log("Welcome API Server");

import express, { Request, Response } from "express";
import authRoute from "./routes/auth_route";
import dotenv from "dotenv";
dotenv.config();

//express application obj uusgeh
const app = express();

const PORT = process.env.PORT;

//middlewares
app.use("/api/v1/auth", authRoute);

//
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome E-Commerce API Server");
});

app.listen(PORT, () => {
  console.log(`server started at localhost:${PORT}`);
});
