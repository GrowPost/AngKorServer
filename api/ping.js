// api/ping.js
let serversStatus = {}; // store multiple server statuses in memory

const OFFLINE_THRESHOLD = 180; // 180 seconds = 3 minutes

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

      if (!data.serverName) 
        return res.status(400).json({ success: false, error: "Missing serverName" });

      // store latest heartbeat
      serversStatus[data.serverName] = {
        serverName: data.serverName,
        onlinePlayersCount: data.onlinePlayersCount || 0,
        currentDate: data.currentDate || null,
        timestamp: data.timestamp || Math.floor(Date.now() / 1000)
      };

      return res.status(200).json({ success: true, stored: serversStatus[data.serverName] });
    } catch (err) {
      return res.status(400).json({ success: false, error: "Invalid JSON" });
    }
  }

  if (req.method === "GET") {
    const now = Math.floor(Date.now() / 1000);

    const response = {};
    for (const name in serversStatus) {
      const server = serversStatus[name];
      const diff = now - server.timestamp;
      response[name] = {
        ...server,
        serverStatus: diff <= OFFLINE_THRESHOLD ? "online" : "offline", // auto online/offline
        lastUpdateSecondsAgo: diff
      };
    }

    return res.status(200).json({ servers: response });
  }

  res.setHeader("Allow", "POST, GET");
  return res.status(405).json({ error: "Method Not Allowed" });
}
