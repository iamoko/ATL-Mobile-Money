import express, { Request, Response } from "express";
import cors from "cors";
import path from "path";
import { errorHandler } from "./middleware/errors";
import paymentRoutes from "./routes/payment.route";
import { airtel_callback } from "./controller/payment.controller";
import dotenv from "dotenv";
import _ from "lodash";

dotenv.config({
  path: path.resolve(__dirname, "../.env"), // adjust if .env is elsewhere
  override: true, // overwrite existing env vars
  quiet: true, // suppress dotenv logs
});

const app = express();

app.use(express.json({ limit: "100kb" }));
app.use(express.urlencoded({ limit: "100kb", extended: true }));

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

const port = _.isUndefined(process.env.PORT) ? 9000 : 8000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});
