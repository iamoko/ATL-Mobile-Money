import express, { Request, Response } from "express";
import cors from "cors";
import path from "path";
import bodyParser from "body-parser";
import { errorHandler } from "./middleware/errors";

import "dotenv/config";

import paymentRoutes from "./routes/payment.route";
import { airtel_callback } from "./controller/payment.controller";

const setTZ = require("set-tz");
setTZ("Africa/Khartoum");

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ limit: "100kb", extended: true }));

// Parse application/json
app.use(bodyParser.json({ limit: "100kb" }));

app.use(express.json());

// const allowedOrigins = ["http://localhost:3000"];

// const options: cors.CorsOptions = {
//   origin: allowedOrigins,
// };

// Then pass these options to cors:
// app.use(cors(options));

app.use("/airtel", airtel_callback);
app.use("/payment", paymentRoutes);

app.use("*", (req: Request, res: Response) => {
  res.status(404).json({ message: "Invalid request" }).end();
});

// Error handling
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
