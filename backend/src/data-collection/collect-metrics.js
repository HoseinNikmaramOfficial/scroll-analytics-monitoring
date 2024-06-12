// backend/src/data-collection/collect-metrics.js

const axios = require('axios');
const { Client } = require('pg');

const client = new Client({
  user: 'yourusername',
  host: 'localhost',
  database: 'scroll_analytics',
  password: 'yourpassword',
  port: 5432,
});

async function collectMetrics() {
  try {
    await client.connect();
    const response = await axios.get('https://api.scroll.io/network/metrics');
    const data = response.data;

    const query = `
      INSERT INTO metrics (timestamp, transaction_volume, block_time, gas_fee)
      VALUES ($1, $2, $3, $4)
    `;
    const values = [new Date(), data.txVolume, data.blockTime, data.gasFee];

    await client.query(query, values);
    console.log('Metrics collected successfully');
  } catch (error) {
    console.error('Error collecting metrics:', error);
  } finally {
    await client.end();
  }
}

collectMetrics();
