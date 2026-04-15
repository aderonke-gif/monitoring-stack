# Monitoring Stack with Prometheus and Grafana

A Node.js application with full observability using Prometheus and Grafana, all running locally with Docker Compose.

## 🚀 What This Project Does
- Node.js Express API with custom metrics
- Prometheus scrapes and stores metrics every 15 seconds
- Grafana displays live dashboards from Prometheus data
- All services run together with Docker Compose

## 🛠️ Tech Stack
- Node.js + Express
- prom-client (metrics library)
- Prometheus
- Grafana
- Docker Compose

## 🏗️ Architecture
\`\`\`
Node.js App (/metrics) → Prometheus (collects) → Grafana (displays)
     ↓
http_requests_total
process_cpu_seconds_total
nodejs_heap_size_used_bytes
\`\`\`

## ▶️ Run the Stack
\`\`\`bash
docker compose up -d
\`\`\`

## 🌐 Access Services
| Service | URL |
|---|---|
| Node.js App | http://localhost:3000 |
| App Metrics | http://localhost:3000/metrics |
| Prometheus | http://localhost:9090 |
| Grafana | http://localhost:3001 |

## 📊 Grafana Setup
1. Open http://localhost:3001
2. Login with admin/admin
3. Go to Connections → Data sources
4. Add Prometheus with URL: http://prometheus:9090
5. Create dashboard with metric: http_requests_total

## 📁 Project Structure
\`\`\`
monitoring-stack/
├── prometheus/
│   └── prometheus.yml    # Prometheus scrape config
├── docker-compose.yml    # All services definition
├── Dockerfile            # Node.js app container
├── index.js              # App with metrics endpoint
└── package.json
\`\`\`
