const http = require('http');
const url = require('url');
const { initDB, addToWaitlist } = require('./database');

const PORT = process.env.PORT || 3000;

// Helper function to parse JSON body
function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(new Error('Invalid JSON'));
      }
    });
  });
}

// Validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Main request handler
async function requestHandler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;

  // Health check endpoint
  if (path === '/health' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'OK', timestamp: new Date().toISOString() }));
    return;
  }

  // Waitlist endpoint
  if (path === '/waitlist' && req.method === 'POST') {
    try {
      const body = await parseBody(req);
      const { name, phoneNumber, email, profession } = body;

      // Validate required fields
      if (!name || !phoneNumber || !email || !profession) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ 
          error: 'Missing required fields: name, phoneNumber, email, profession' 
        }));
        return;
      }

      // Validate email format
      if (!isValidEmail(email)) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid email format' }));
        return;
      }

      // Add to waitlist
      const result = await addToWaitlist(name, phoneNumber, email, profession);
      
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        message: 'Successfully added to waitlist',
        data: {
          id: result.id,
          name: result.name,
          phoneNumber: result.phone_number,
          email: result.email,
          profession: result.profession,
          createdAt: result.created_at
        }
      }));

    } catch (error) {
      console.error('Waitlist error:', error);
      
      if (error.message === 'Email already exists in waitlist') {
        res.writeHead(409, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Email already exists in waitlist' }));
      } else if (error.message === 'Invalid JSON') {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON format' }));
      } else {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal server error' }));
      }
    }
    return;
  }

  // 404 for all other routes
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not found' }));
}

// Start server
async function startServer() {
  try {
    await initDB();
    
    const server = http.createServer(requestHandler);
    
    server.listen(PORT, '0.0.0.0', () => {
      console.log(`Waitlist API server running on port ${PORT}`);
      console.log(`Health check: http://localhost:${PORT}/health`);
      console.log(`Waitlist endpoint: POST http://localhost:${PORT}/waitlist`);
    });

  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();