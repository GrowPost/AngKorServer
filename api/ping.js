import net from 'net';

export default async function handler(req, res) {
  const serverIP = '91.134.85.13';
  const portsToCheck = [17091, 17092, 17093, 17002, 27280, 443]; // Add any ports you want to test
  const timeout = 3000; // 3 seconds

  const results = [];

  const checkPort = (port) => {
    return new Promise((resolve) => {
      const socket = new net.Socket();
      let done = false;

      socket.setTimeout(timeout);

      socket.connect(port, serverIP, () => {
        if (!done) {
          done = true;
          results.push({ port, status: 'online' });
          socket.destroy();
          resolve();
        }
      });

      socket.on('error', () => {
        if (!done) {
          done = true;
          results.push({ port, status: 'offline' });
          resolve();
        }
      });

      socket.on('timeout', () => {
        if (!done) {
          done = true;
          results.push({ port, status: 'offline' });
          socket.destroy();
          resolve();
        }
      });
    });
  };

  // Check all ports
  await Promise.all(portsToCheck.map(checkPort));

  res.status(200).json({ serverIP, ports: results });
}
