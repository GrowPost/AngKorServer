import fs from "fs";
import path from "path";

// Store data persistently in data.json
const FILE_PATH = path.join(process.cwd(), "data.json");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Only POST allowed" });
  }

  try {
    // Parse JSON body
    const data = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    // Build stored object
    const storedData = {
      serverName: data.serverName || "Unknown",
      onlinePlayersCount: data.onlinePlayersCount || 0,
      currentDate: data.currentDate || null,
      timestamp: data.timestamp || Math.floor(Date.now() / 1000)
    };

    // Save to file
    fs.writeFileSync(FILE_PATH, JSON.stringify(storedData, null, 2), "utf8");

    return res.status(200).json({ success: true, stored: storedData });
  } catch (err) {
    console.error("Failed to store webhook data:", err);
    return res.status(400).json({ success: false, error: "Invalid JSON or write error" });
  }
}
