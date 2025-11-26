// api/ping.js
let lastStatus = null; // stores the latest webhook data

export default async function handler(req, res) {
  // Receive POST from Lua
  if (req.method === "POST") {
    try {
      const data = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

      lastStatus = {
        serverName: data.serverName || "Unknown",
        onlinePlayersCount: data.onlinePlayersCount || 0,
        currentDate: data.currentDate || null,
        timestamp: data.timestamp || Math.floor(Date.now() / 1000)
      };

      return res.status(200).json({ success: true, stored: lastStatus });
    } catch (err) {
      return res.status(400).json({ success: false, error: "Invalid JSON" });
    }
  }

  // Return last stored status on GET
  if (req.method === "GET") {
    if (!lastStatus) {
      return res.status(200).json({
        serverName: "Unknown",
        onlinePlayersCount: 0,
        currentDate: null,
        timestamp: null
      });
    }
    return res.status(200).json(lastStatus);
  }

  res.setHeader("Allow", "POST, GET");
  return res.status(405).json({ error: "Method Not Allowed" });
}
