import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Only POST allowed" });

  try {
    const data = req.body;
    if (!data || !data.leaderboard)
      return res.status(400).json({ error: "Invalid Data" });

    await client.connect();
    const collection = client.db("growtopia").collection("leaderboard");

    await collection.updateOne(
      { type: "wl" },
      {
        $set: {
          leaderboard: data.leaderboard,
          timestamp: data.timestamp,
        },
      },
      { upsert: true }
    );

    return res.status(200).json({ success: true, saved: true });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
