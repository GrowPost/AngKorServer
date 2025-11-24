import net from 'net';

export default async function handler(req, res) {
  const serverIP = '91.134.85.13';  // Replace with your server IP
  const serverPort = 17002;           // Replace with your game server port

  const socket = new net.Socket();
  let responded = false;

  socket.setTimeout(3000); // 3s timeout

  socket.connect(serverPort, serverIP, () => {
    responded = true;
    res.status(200).json({
      success: true,
      server: { status: 'online' }
    });
    socket.destroy();
  });

  socket.on('error', () => {
    if (!responded) {
      responded = true;
      res.status(200).json({
        success: false,
        server: { status: 'offline' }
      });
    }
  });

  socket.on('timeout', () => {
    if (!responded) {
      responded = true;
      res.status(200).json({
        success: false,
        server: { status: 'offline' }
      });
      socket.destroy();
    }
  });
}
