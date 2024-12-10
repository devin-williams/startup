const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const { v4: uuidv4 } = require('uuid');
const db = require('./database');
const bcrypt = require('bcrypt');
const config = require('./api_key.json');
const WebSocket = require('ws');

const app = express();
const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

app.get('/api/rates', async (req, res) => {
  try {
    const response = await axios.get(`http://data.fixer.io/api/latest?access_key=${config.api_key}`);
    res.json(response.data);
  } catch (error) {
    console.error('Failed to fetch rates:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Failed to fetch rates' });
  }
});

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  const user = await db.getUser(req.body.email);
  if (user) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const newUser = await db.createUser(req.body.email, req.body.password);
    res.send({ token: newUser.token, type: newUser.type });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = await db.getUser(req.body.email);
  if (user && await bcrypt.compare(req.body.password, user.password)) {
    const token = uuidv4();
    await db.updateUserToken(user.email, token);
    res.send({ token, type: user.type });
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', async (req, res) => {
  const result = await db.deleteUserToken(req.body.token);
  if (result.modifiedCount > 0) {
    res.status(204).end();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

// Start the server
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// WebSocket server
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('New client connected');
  console.log('Total clients connected:', wss.clients.size);
  ws.on('message', (message) => {
    const parsedMessage = JSON.parse(message);
    console.log('Received message:', parsedMessage);
    console.log('Attempting to broadcast to a client:', JSON.stringify(parsedMessage));
    console.log('type:', parsedMessage.type);
    
      wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN && client !== ws) {
          client.send(JSON.stringify(parsedMessage));
          console.log('Sent message:', parsedMessage);
        }
      });
    
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});