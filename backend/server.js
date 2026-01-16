require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Middleware
const allowedOrigin = process.env.FRONTEND_ORIGIN;
if (allowedOrigin) {
  app.use(cors({ origin: allowedOrigin }));
} else {
  app.use(cors());
}
app.use(express.json());

// Serve static files (avatars)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Database
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/interior-design';
mongoose
  .connect(mongoUri, {
    dbName: 'interior-design',
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Health check
app.get('/api/health', (req, res) => res.json({ ok: true }));

// Routes
app.use('/api/auth', require('./auth'));
app.use('/api/projects', require('./routes/Projects'));
app.use('/api/services', require('./routes/services'));
app.use('/api/contact', require('./routes/contacts'));
app.use('/api/bookings', require('./routes/bookings'));
app.use('/api/favorites', require('./routes/favorites'));
app.use('/api/admin', require('./routes/admin'));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

