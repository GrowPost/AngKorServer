// api/ping.js
let lastStatus = null; // store the latest server status
const OFFLINE_THRESHOLD = 60; // 3 minutes

export default function handler(req, res) {
  const now = Math.floor(Date.now() / 1000);

  if (req.method === "POST") {
    try {
      const data = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

      if (!data.serverName) 
        return res.status(400).json({ success: false, error: "Missing serverName" });

      // Save latest status
      lastStatus = {
        serverName: data.serverName,
        onlinePlayersCount: data.onlinePlayersCount || 0,
        currentDate: data.currentDate || null,
        timestamp: data.timestamp || now
      };

      return res.status(200).json({ success: true, stored: lastStatus });
    } catch {
      return res.status(400).json({ success: false, error: "Invalid JSON" });
    }
  }

  if (req.method === "GET") {
    if (!lastStatus) {
      return res.status(200).json({
        serverName: "Unknown",
        onlinePlayersCount: 0,
        currentDate: null,
        timestamp: now,
        serverStatus: "offline",
        lastUpdateSecondsAgo: null
      });
    }

    const diff = now - lastStatus.timestamp;

    return res.status(200).json({
      ...lastStatus,
      serverStatus: diff <= OFFLINE_THRESHOLD ? "online" : "offline",
      lastUpdateSecondsAgo: diff
    });
  }

  res.setHeader("Allow", "POST, GET");
  return res.status(405).json({ error: "Method Not Allowed" });
}
