import http from 'http';

export default async function handler(req, res) {
  const options = {
    host: '5.39.13.21',
    port: 27280,
    timeout: 3000,
    method: 'GET',
    headers: {
      'X-Soft-Authenticate-Key': '194638752546'
    }
  };

  const request = http.request(options, (response) => {
    res.status(200).json({
      success: true,
      server: { status: 'online' }
    });
  });

  request.on('error', () => {
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
