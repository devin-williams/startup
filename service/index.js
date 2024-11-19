import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.static('public'));

app.get('/api/rates', async (req, res) => {
  try {
    const response = await axios.get(`http://data.fixer.io/api/latest?access_key=${process.env.FIXER_API_KEY}`);
    res.json(response.data);
  } catch (error) {
    console.error('Failed to fetch rates:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Failed to fetch rates' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});