import { Request, Response } from "express";
import _ from "lodash";
import { logToFile } from "../utils/logger";

/**
 * Register company
 * @param req
 * @param res
 */
export const airtel_callback = async (req: Request, res: Response) => {
  try {
    // 1️⃣ Get originating IP
    const ip =
      req.headers["x-forwarded-for"]?.toString().split(",")[0] ||
      req.socket.remoteAddress;

    // 2️⃣ Extract params
    const params = req.params; // URL params (e.g., /user/:id)
    const query = req.query; // Query string params (e.g., ?a=1&b=2)
    const body = req.body; // Body params (POST/PUT data)

    // 3️⃣ Log IP and parameters
    logToFile("airtel_callbacks.log", { ip, params, query, body });

    // 4️⃣ Respond to Airtel
    res.sendStatus(200).end();
  } catch (error) {
    console.error("Error in Airtel callback:", error);
    res.sendStatus(500).end();
  }
};
