// api/ping.js
import fs from "fs";
import path from "path";

const FILE_PATH = path.join(process.cwd(), "data.json");

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

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

  // Optional: return raw last stored status if GET is requested
  if (req.method === "GET") {
    if (!fs.existsSync(FILE_PATH)) {
      return res.status(200).json({
        serverName: "Unknown",
        onlinePlayersCount: 0,
        currentDate: null,
        timestamp: null
      });
    }
    const data = JSON.parse(fs.readFileSync(FILE_PATH, "utf8"));
    return res.status(200).json(data);
  }

  res.setHeader("Allow", "POST, GET");
  return res.status(405).json({ error: "Method Not Allowed" });
}
