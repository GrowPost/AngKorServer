import net from "net";

export default async function handler(req, res) {
  const serverIP = "5.39.13.21";   // Your dedicated IP
  const serverPort = 17002;        // Your correct GTPS port

  const start = Date.now();
  const socket = new net.Socket();

  socket.setTimeout(3000);

  socket.connect(serverPort, serverIP, () => {
    const latency = Date.now() - start;

    res.status(200).json({
      success: true,
      server: {
        status: "online",
        host: serverIP,
        port: serverPort,
        latency: latency
      }
    });

    socket.destroy();
  });

  socket.on("error", () => {
    res.status(200).json({
      success: false,
      server: { status: "offline" }
    });
  });

  socket.on("timeout", () => {
    res.status(200).json({
      success: false,
      server: { status: "offline" }
    });
    socket.destroy();
  });
}
