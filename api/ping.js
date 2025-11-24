import http from 'http';

export default async function handler(req, res) {
  const serverIP = '5.39.13.21';
  const serverPort = 27280; // Change this to your actual port

  const options = {
    host: serverIP,
    port: serverPort,
    timeout: 3000 // 3 seconds timeout
  };

  const request = http.request(options, (response) => {
    // If we get any response, server is online
    res.status(200).json({
      success: true,
      server: { status: 'online' }
    });
  });

  request.on('error', (err) => {
    // If there’s an error (server not reachable), report offline
    res.status(200).json({
      success: false,
      server: { status: 'offline' }
    });
  });

  request.on('timeout', () => {
    request.destroy();
    res.status(200).json({
      success: false,
      server: { status: 'offline' }
    });
  });

  request.end();
}
