const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// GET /api/services
router.get('/', async (req, res) => {
  try {
    const services = await Service.find({}).sort({ createdAt: -1 });
    res.json(services);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = router;
