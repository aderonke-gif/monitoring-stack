const express = require('express');
const client = require('prom-client');

const app = express();
const PORT = 3000;

// Collect default metrics (CPU, memory, etc.)
const register = new client.Registry();
client.collectDefaultMetrics({ register });

// Custom counter - tracks how many times / is visited
const httpRequestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status'],
  registers: [register]
});

// Main route
app.get('/', (req, res) => {
  httpRequestCounter.inc({ method: 'GET', route: '/', status: 200 });
  res.json({ message: 'Hello from monitored app!' });
});

// Metrics route - Prometheus scrapes this
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Metrics available at http://localhost:${PORT}/metrics`);
});

module.exports = app;
