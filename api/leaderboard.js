// api/leaderboard.js

let lastLeaderboard = null;

export default function handler(req, res) {
  // POST → store leaderboard data
  if (req.method === "POST") {
    try {
      const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

      if (!body.leaderboard)
        return res.status(400).json({ success: false, error: "Missing leaderboard" });

      lastLeaderboard = body;
      return res.status(200).json({ success: true });
    } catch {
      return res.status(400).json({ success: false, error: "Invalid JSON" });
    }
  }

  // GET → return the latest leaderboard ONLY
  if (req.method === "GET") {
    return res.status(200).json(lastLeaderboard || { leaderboard: [] });
  }

  res.setHeader("Allow", "POST, GET");
  return res.status(405).json({ error: "Method Not Allowed" });
}
