import express, { Request, Response } from "express";
import cors from "cors";
import authRoute from "./routes/auth_route";
import userRoute from "./routes/user_route";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import { Resend } from "resend";
import { generateHtmlTemplate } from "./utils/generateHtmlTemplate";
dotenv.config();

//express application obj uusgeh
const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL || "";

//middlewares
app.use(express.json());
app.use(cors());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/auth", userRoute);

//
app.get("/", async (req: Request, res: Response) => {
  const randomOtp = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["myeruyertjanibyek@gmail.com", "j.myeruyert@gmail.com"],
    subject: "hello world",
    html: generateHtmlTemplate(randomOtp),
  });
  if (error) {
    console.error("Email error", { error });
  }
  res.send("Welcome E-Commerce API Server");
});

connectDB(MONGO_URL);

app.listen(PORT, () => {
  console.log(`server started at localhost:${PORT}`);
});
