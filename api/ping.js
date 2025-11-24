
import net from "net";

export default async function handler(req, res) {
  const serverIP = "5.39.13.21";   // your real GTPS IP
  const serverPort = 17091;        // your real GTPS port

  const start = Date.now();
  const socket = new net.Socket();

  socket.setTimeout(3000);

  socket.connect(serverPort, serverIP, () => {
    const latency = Date.now() - start;

    res.status(200).json({
      success: true,
      timestamp: new Date().toISOString(),
      server: {
        host: serverIP,
        status: "online",
        latency: latency,
        uptime: "99.9%"
      },
      ports: [
        { port: serverPort, status: "open", latency: latency }
      ],
      openPorts: 1,
      totalPorts: 1
    });

    socket.destroy();
  });

  socket.on("error", () => {
    res.status(200).json({
      success: false,
      timestamp: new Date().toISOString(),
      server: {
        host: serverIP,
        status: "offline"
      },
      openPorts: 0,
      totalPorts: 1
    });
  });

  socket.on("timeout", () => {
    res.status(200).json({
      success: false,
      timestamp: new Date().toISOString(),
      server: {
        host: serverIP,
        status: "offline"
      },
      openPorts: 0,
      totalPorts: 1
    });

    socket.destroy();
  });
}
