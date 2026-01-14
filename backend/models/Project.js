const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['residential', 'commercial', 'restoration'],
    required: true
  },
  images: [{
    type: String
  }],
  location: {
    type: String
  },
  area: {
    type: String
  },
  completionDate: {
    type: Date
  },
  services: [{
    type: String
  }],
  featured: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Project', projectSchema);