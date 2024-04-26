import express from "express";
import {
  checkout,
  paymentVerification,
} from "../controllers/paymentController.js";

const router = express.Router();
router.post("/checkout", checkout);
router.post("/paymentverification", paymentVerification);
router.get("/paymentsuccess", (req, res) => {
  const reference = req.query.reference;
  console.log(reference);
  res.send({
    referenceId: reference,
  });
});
export default router;
