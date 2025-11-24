import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

const API_URL = 'http://127.0.0.1:27280/status';
const SECRET_KEY = '194638752546';
const OUTPUT_FILE = path.join(__dirname, 'server-status.json'); // adjust path to public folder if needed

async function updateStatus() {
  try {
    const res = await fetch(API_URL, {
      headers: { 'X-Soft-Authenticate-Key': SECRET_KEY },
      timeout: 3000
    });

    const data = await res.json();

    fs.writeFileSync(
      OUTPUT_FILE,
      JSON.stringify({
        success: true,
        server: {
          status: 'online',
          currentPlayers: data.players || 0,
          maxPlayers: data.maxPlayers || 0,
          uptime: data.uptime || 'N/A',
          version: data.version || 'N/A'
        }
      }, null, 2)
    );

    console.log('Server status updated!');
  } catch (err) {
    fs.writeFileSync(
      OUTPUT_FILE,
      JSON.stringify({ success: false, server: { status: 'offline' } }, null, 2)
    );
    console.log('Server offline or error.');
  }
}

// Run immediately and repeat every 30 seconds
updateStatus();
setInterval(updateStatus, 30000);
