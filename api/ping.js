import net from 'net';

export default async function handler(req, res) {
  const serverIP = '91.134.85.13'; // Replace with your GTPS server IP
  const serverPort = 17091;        // Replace with your GTPS server port

  const client = new net.Socket();
  let responded = false;

  // Set 3-second timeout
  client.setTimeout(3000);

  // Try to connect to the server
  client.connect(serverPort, serverIP, () => {
    responded = true;
    client.destroy(); // Close connection
    res.status(200).json({
      success: true,
      server: { status: 'online' }
    });
  });

  // If connection fails
  client.on('error', () => {
    if (!responded) {
      responded = true;
      client.destroy();
      res.status(200).json({
        success: false,
        server: { status: 'offline' }
      });
    }
  });

  // If connection times out
  client.on('timeout', () => {
    if (!responded) {
      responded = true;
      client.destroy();
      res.status(200).json({
        success: false,
        server: { status: 'offline' }
      });
    }
  });
}
