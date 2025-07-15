# 🐳 Multi-Service Dockerized Application

A full-stack, production-ready Dockerized application using:

- **React** frontend
- **Node.js + Express** API
- **MongoDB** for persistent data
- **Redis** cache for performance
- **Nginx** as a reverse proxy

Built with advanced Docker features including **multi-stage builds**, **custom images**, **volumes**, **networks**, **secrets**, **health checks**, and **log rotation**.

---

## 📦 Project Structure

```yaml
multi-service-app/
├── api/              # Node.js Express backend
├── web/              # React frontend
├── nginx/            # Nginx reverse proxy config
├── secrets/          # Docker secrets (e.g., MongoDB password)
├── docker-compose.yml
└── .env              # Centralized environment variables

```

## 🚀 Features

✅ Multi-container setup using **Docker Compose**  
✅ **Custom Dockerfiles** for frontend and API  
✅ **Multi-stage build** for optimized frontend image  
✅ **Persistent volumes** for MongoDB and Redis  
✅ **Docker secrets** for secure credentials  
✅ **Health checks** for all services  
✅ **Log rotation** via Docker logging driver  
✅ Services communicate over shared **Docker network**

---

## 🛠️ Getting Started

### Prerequisites

- Docker + Docker Compose
- Node.js (for development)
- Git

---

### 1. Clone the repo

```bash
git clone https://github.com/shakeelkhuhro/multi-service-app.git
cd multi-service-app
```

---

### 2. Set up secrets
Create the MongoDB root password file:

```bash
mkdir -p secrets
echo "your-secure-password" > secrets/mongo-root-password.txt
```

---

### 3. Build and start the app

```bash
docker compose up -d --build
```

---

### 4. Access the application

| Service  | URL                                          |
| -------- | -------------------------------------------- |
| Frontend | [http://localhost](http://localhost)         |
| API      | [http://localhost/api](http://localhost/api) |
| MongoDB  | internal (not exposed)                       |
| Redis    | internal (not exposed)                       |

---

## 🧪 Health Checks

Each service includes a health check to ensure stability and reliability in orchestration environments.

---

## 🧰 Logging

All services use `json-file` logging with rotation:

* `max-size: 10m`
* `max-file: 3`

Logs can be viewed with:

```bash
docker compose logs <service>
```

---

## 🧼 Clean Up

```bash
docker compose down -v
```

---

## 📄 License

MIT License — feel free to use, share, and improve.

---