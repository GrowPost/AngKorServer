import http from 'http';

export default function handler(req, res) {
  const options = {
    host: '5.39.13.21',         // your server IP
    port: 443,                 // your API port
    path: '/api/ping',           // GrowSoft ping endpoint
    method: 'GET',
    timeout: 5000,
    headers: {
      'X-Soft-Authenticate-Key': '194638752546'
    }
  };

  const request = http.request(options, (response) => {
    let data = '';

    response.on('data', chunk => {
      data += chunk;
    });

    response.on('end', () => {
      try {
        const json = JSON.parse(data);

        return res.status(200).json({
          success: true,
          server: 'online',
          players: json.players ?? null,       // if GrowSoft provides it
          maxPlayers: json.maxPlayers ?? null,
          uptime: json.uptime ?? null,
          raw: json
        });
      } catch (err) {
        // Could not parse JSON, still online
        return res.status(200).json({
          success: true,
          server: 'online',
          raw: data
        });
      }
    });
  });

  request.on('error', () => {
    return res.status(200).json({
      success: false,
      server: 'offline'
    });
  });

  request.on('timeout', () => {
    request.destroy();
    return res.status(200).json({
      success: false,
      server: 'offline'
    });
  });

  request.end();
}
