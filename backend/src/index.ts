import express, { Request, Response } from "express";
import cors from "cors";
import authRoute from "./routes/auth_route";
// import userRoute from "./routes/user_route";
import categoryRoute from "./routes/category_route";
import productRoute from "./routes/product_route";
import cartRoute from "./routes/cart_route";
import wishlistRoute from "./routes/wishlist_route";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import { sendEmail } from "./utils/sendemail";
dotenv.config();

//express application obj uusgeh
const app = express();

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL || "";

//middlewares
app.use(express.json());
app.use(cors());
app.use("/api/v1/auth", authRoute);
// app.use("/api/v1/auth", userRoute);
app.use("/api/v1", categoryRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/cart", cartRoute);
app.use("/api/v1/wishlist", wishlistRoute);

//
// app.post("/send", async (req: Request, res: Response) => {
//   sendEmail("j.myeruyert@gmail.com");
//   res.send("Welcome E-Commerce API Server");
// });

connectDB(MONGO_URL);

app.listen(PORT, () => {
  console.log(`server started at localhost:${PORT}`);
});
