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
    const ip =
      req.headers["x-forwarded-for"]?.toString().split(",")[0] ||
      req.socket.remoteAddress;

    const headers = req.headers;
    const body = req.body;

    // Log to file
    logToFile("airtel_callbacks.log", { ip, headers, body });

    res.sendStatus(200).end();
  } catch (error) {
    console.error("Error in Airtel callback:", error);
    res.sendStatus(500).end();
  }
};
