app.post("/api/receive", (req, res) => {
  const data = req.body; // contains { server: { status, players, maxPlayers }, secret }
  if(data.secret !== "194638752546") return res.status(403).send("Forbidden");
  console.log(data.server);
  res.send("OK");
});
