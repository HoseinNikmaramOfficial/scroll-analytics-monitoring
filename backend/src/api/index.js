// backend/src/api/index.js

const express = require('express');
const { Client } = require('pg');

const app = express();
const port = 3000;

const client = new Client({
  user: 'yourusername',
  host: 'localhost',
  database: 'scroll_analytics',
  password: 'yourpassword',
  port: 5432,
});

client.connect();

app.get('/network/metrics', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM metrics ORDER BY timestamp DESC LIMIT 1');
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error retrieving metrics:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});
