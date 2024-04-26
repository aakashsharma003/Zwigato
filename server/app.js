import express from "express";
import { config } from "dotenv";
import paymentRoute from "./routes/paymentRoute.js";
import cors from "cors";
import { paymentVerification } from "./controllers/paymentController.js";

config({ path: "./config/config.env" });
export const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", paymentRoute);
app.get("/api/getkey", (req, res) => {
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY });
});
// app.get("/api/paymentsuccess", paymentVerification);
