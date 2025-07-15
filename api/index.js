const express = require('express');
const mongoose = require('mongoose');
const Redis = require('ioredis');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect(`mongodb://mongo:27017/myapp`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB error:', err));

// Redis Connection
const redis = new Redis({ host: 'redis', port: 6379 });

app.get('/', async (req, res) => {
  await redis.set('msg', 'Hello from Redis');
  const msg = await redis.get('msg');
  res.send(`API is working. Redis says: ${msg}`);
});

app.listen(PORT, () => {
  console.log(`🚀 API Server running on port ${PORT}`);
});
