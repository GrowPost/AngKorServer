const express = require("express");
const app = express();
const port = 3000; // or your port

// Middleware to parse JSON POST requests
app.use(express.json());

app.post("/api/receive", (req, res) => {
  const data = req.body; // now JSON is parsed correctly
  if (!data) return res.status(400).send("Bad Request");
  
  // Check secret key
  if (data.secret !== "194638752546") return res.status(403).send("Forbidden");
  
  console.log("Received server data:", data.server);
  
  res.send("OK");
});

// Start server
app.listen(port, () => {
  console.log(`API server running on port ${port}`);
});

