import { instance } from "../server.js";
import crypto from "crypto";
export const checkout = async (req, res) => {
  const options = {
    amount: Number(req.body.price * 100),
    currency: "INR",
    receipt: "order_rcptid_11",
  };
  const order = await instance.orders.create(options);
  //   console.log(order);
  res.status(200).json({ success: true, order });
};

export const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;
  const body = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest("hex");
  const isAuthentic = expectedSignature === razorpay_signature;
  console.log("sig received", razorpay_signature);
  console.log("sig expected", expectedSignature);
  let response = { signatureIsValid: "false" };
  if (isAuthentic) {
    // payment is successful
    res.redirect(
      `${process.env.FRONTEND}/paymentsuccess?reference=${razorpay_payment_id}`
    );
  } else {
    res.status(400).json({ success: false });
  }
};
