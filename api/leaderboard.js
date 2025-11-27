let lastLeaderboard = [];
let lastUpdate = null;

export default async function handler(req, res) {
  const now = Math.floor(Date.now() / 1000);

  if (req.method === "POST") {
    try {
      // log raw body for debugging
      console.log("Raw POST body:", req.body);

      const data = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

      if (!data.leaderboard || !Array.isArray(data.leaderboard)) {
        console.log("Invalid leaderboard format:", data);
        return res.status(400).json({ success: false, error: "Missing or invalid leaderboard" });
      }

      lastLeaderboard = data.leaderboard;
      lastUpdate = data.timestamp || now;

      console.log("Received leaderboard POST:", lastLeaderboard);

      return res.status(200).json({ success: true, stored: lastLeaderboard });
    } catch (err) {
      console.log("POST JSON parse error:", err);
      console.log("Raw body:", req.body);
      return res.status(400).json({ success: false, error: "Invalid JSON" });
    }
  }

  if (req.method === "GET") {
    return res.status(200).json({
      leaderboard: lastLeaderboard,
      lastUpdateSecondsAgo: lastUpdate ? now - lastUpdate : null
    });
  }

  res.setHeader("Allow", "POST, GET");
  return res.status(405).json({ error: "Method Not Allowed" });
}
