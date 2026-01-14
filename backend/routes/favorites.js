const express = require('express');
const router = express.Router();
const Favorite = require('../models/Favorite');
const { protect } = require('../middleware/auth');

// Get user's favorites
router.get('/', protect, async (req, res) => {
  try {
    const favorites = await Favorite.find({ user: req.user.id })
      .populate('project')
      .sort({ createdAt: -1 });
    res.json({ success: true, data: favorites });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Add to favorites
router.post('/:projectId', protect, async (req, res) => {
  try {
    const favorite = await Favorite.create({
      user: req.user.id,
      project: req.params.projectId
    });
    await favorite.populate('project');
    res.status(201).json({ success: true, data: favorite });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ success: false, message: 'Already in favorites' });
    }
    res.status(400).json({ success: false, message: err.message });
  }
});

// Remove from favorites
router.delete('/:projectId', protect, async (req, res) => {
  try {
    await Favorite.findOneAndDelete({
      user: req.user.id,
      project: req.params.projectId
    });
    res.json({ success: true, message: 'Removed from favorites' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Check if project is favorited
router.get('/check/:projectId', protect, async (req, res) => {
  try {
    const favorite = await Favorite.findOne({
      user: req.user.id,
      project: req.params.projectId
    });
    res.json({ success: true, isFavorited: !!favorite });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
