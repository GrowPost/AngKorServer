import net from 'net';

const serverIP = '5.39.13.21'; // Your Dedicated Server IP
const commonPorts = [80, 443, 17091, 25565, 3000, 8080]; // Add more if needed

async function checkPort(port) {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    let isOpen = false;

    socket.setTimeout(2000); // 2 seconds timeout

    socket.on('connect', () => {
      isOpen = true;
      socket.destroy();
    });

    socket.on('timeout', () => {
      socket.destroy();
    });

    socket.on('error', () => {
      // port is closed or blocked
    });

    socket.on('close', () => {
      resolve({ port, isOpen });
    });

    socket.connect(port, serverIP);
  });
}

async function scanPorts() {
  for (const port of commonPorts) {
    const result = await checkPort(port);
    console.log(`Port ${port} is ${result.isOpen ? 'OPEN' : 'CLOSED'}`);
  }
}

scanPorts();
