import { Router } from "express";
import { airtel_callback } from "../controller/payment.controller";
const router = Router();

router.use("/airtel", airtel_callback);

export default router;
