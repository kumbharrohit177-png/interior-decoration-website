const Project = require('../models/Project');
const Service = require('../models/Service');
const User = require('../models/User');
const Booking = require('../models/Booking');

// Get dashboard stats
exports.getDashboardStats = async (req, res) => {
  try {
    const [projects, services, users, bookings] = await Promise.all([
      Project.countDocuments(),
      Service.countDocuments(),
      User.countDocuments(),
      Booking.countDocuments()
    ]);

    const recentBookings = await Booking.find()
      .populate('user', 'firstName lastName email')
      .sort({ createdAt: -1 })
      .limit(5);

    res.json({
      success: true,
      data: {
        stats: {
          projects,
          services,
          users,
          bookings
        },
        recentBookings
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Get all users (admin)
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password').sort({ createdAt: -1 });
    res.json({ success: true, data: users });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Update user role
exports.updateUserRole = async (req, res) => {
  try {
    const { role } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role },
      { new: true }
    ).select('-password');
    res.json({ success: true, data: user });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// Delete user
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
