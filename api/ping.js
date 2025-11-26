// This variable stores the latest server status (lives in Vercel runtime RAM)
let lastStatus = null;

export default function handler(req, res) {
    if (req.method === "POST") {
        try {
            const data = req.body;

            // Save the data from GrowSoft Lua script
            lastStatus = {
                serverName: data.serverName || "Unknown",
                onlinePlayersCount: data.onlinePlayersCount || 0,
                currentDate: data.currentDate || null,
                timestamp: data.timestamp || Date.now() / 1000
            };

            return res.status(200).json({ success: true, received: lastStatus });
        } catch (err) {
            return res.status(400).json({ success: false, error: "Invalid JSON" });
        }
    }

    // If GET request → return the stored heartbeat
    if (req.method === "GET") {
        if (!lastStatus) {
            return res.status(200).json({
                success: false,
                server: { status: "offline" }
            });
        }

        const now = Date.now() / 1000;
        const diff = now - lastStatus.timestamp;

        // If more than 900 seconds (15 min) → consider offline
        if (diff > 900) {
            return res.status(200).json({
                success: false,
                server: { status: "offline", lastUpdateSecondsAgo: diff }
            });
        }

        return res.status(200).json({
            success: true,
            server: {
                status: "online",
                ...lastStatus
            }
        });
    }

    // For other methods
    return res.status(405).json({ error: "Method Not Allowed" });
}
