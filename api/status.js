// In-memory storage
let lastStatus = null;       // From Lua server status webhook
let lastLeaderboard = null;  // From Lua leaderboard webhook

const OFFLINE_THRESHOLD = 12; // seconds for server online/offline

export default function handler(req, res) {
  const now = Math.floor(Date.now() / 1000);

  // POST: Receive server status
  if (req.method === "POST" && req.body.type === "status") {
    try {
      const data = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
      if (!data.serverName) return res.status(400).json({ success: false, error: "Missing serverName" });

      lastStatus = {
        serverName: data.serverName,
        onlinePlayersCount: data.onlinePlayersCount || 0,
        timestamp: data.timestamp || now
      };

      return res.status(200).json({ success: true });
    } catch {
      return res.status(400).json({ success: false, error: "Invalid JSON" });
    }
  }

  // POST: Receive leaderboard
  if (req.method === "POST" && req.body.type === "leaderboard") {
    try {
      const data = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
      if (!data.leaderboard) return res.status(400).json({ success: false, error: "Missing leaderboard" });

      lastLeaderboard = {
        leaderboard: data.leaderboard,
        timestamp: data.timestamp || now
      };

      return res.status(200).json({ success: true });
    } catch {
      return res.status(400).json({ success: false, error: "Invalid JSON" });
    }
  }

  // GET: Return combined data
  if (req.method === "GET") {
    const diff = lastStatus ? now - lastStatus.timestamp : null;
    const serverStatus = diff !== null && diff <= OFFLINE_THRESHOLD ? "online" : "offline";

    return res.status(200).json({
      server: {
        serverName: lastStatus?.serverName || "Unknown",
        onlinePlayers: lastStatus?.onlinePlayersCount || 0,
        status: serverStatus,
        lastUpdateSecondsAgo: diff
      },
      leaderboard: lastLeaderboard?.leaderboard || []
    });
  }

  res.setHeader("Allow", "POST, GET");
  return res.status(405).json({ error: "Method Not Allowed" });
}
