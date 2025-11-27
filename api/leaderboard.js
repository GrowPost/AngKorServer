let lastLeaderboard = []; // store the latest leaderboard
let lastUpdate = null;    // timestamp of the last update

export default function handler(req, res) {
  const now = Math.floor(Date.now() / 1000);

  // POST: Receive leaderboard from Lua
  if (req.method === "POST") {
    try {
      const data = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

      if (!data.leaderboard || !Array.isArray(data.leaderboard)) {
        return res.status(400).json({ success: false, error: "Missing or invalid leaderboard" });
      }

      lastLeaderboard = data.leaderboard;
      lastUpdate = data.timestamp || now;

      return res.status(200).json({ success: true, stored: lastLeaderboard });
    } catch {
      return res.status(400).json({ success: false, error: "Invalid JSON" });
    }
  }

  // GET: Return the latest leaderboard
  if (req.method === "GET") {
    return res.status(200).json({
      leaderboard: lastLeaderboard,
      lastUpdateSecondsAgo: lastUpdate ? now - lastUpdate : null
    });
  }

  res.setHeader("Allow", "POST, GET");
  return res.status(405).json({ error: "Method Not Allowed" });
}
