import { app } from "./app.js";
import Razorpay from "razorpay";

const port = process.env.PORT;
export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});
app.listen(port, () => {
  console.log(`Our app is listening on ${port}`);
});
