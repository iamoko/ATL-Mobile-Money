import fs from "fs";
import path from "path";

/**
 * Append logs to a file, create file if it doesn't exist
 * @param fileName - log file name (saved in 'logs' folder)
 * @param data - object to log
 */
export const logToFile = (fileName: string, data: any) => {
  try {
    // Ensure logs folder exists
    const logsDir = path.join(__dirname, "logs");
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }

    console.log(logsDir);

    // Full file path
    const logFilePath = path.join(logsDir, fileName);

    // Prepare log entry
    const logEntry = {
      timestamp: new Date().toISOString(),
      ...data,
    };

    // Append log (creates file if it doesn't exist)
    fs.appendFileSync(logFilePath, JSON.stringify(logEntry, null, 2) + "\n\n", {
      encoding: "utf8",
      flag: "a", // append mode
    });
  } catch (err) {
    console.error("Error writing log:", err);
  }
};
