const express = require('express');
const axios = require('axios');
const app = express();
const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.static('public'));

app.get('/api/quote', async (req, res) => {
  try {
    const response = await axios.get('https://api.quotable.io/random');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch quote' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});