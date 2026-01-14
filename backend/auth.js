const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const authController = require('./controllers/authController');
const { protect, authorize } = require('./middleware/auth');
const upload = require('./middleware/upload');

// Validation rules
const registerValidation = [
  body('firstName').notEmpty().withMessage('First name is required'),
  body('lastName').notEmpty().withMessage('Last name is required'),
  body('email').isEmail().withMessage('Please include a valid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('phone').optional().isMobilePhone().withMessage('Please include a valid phone number')
];

const loginValidation = [
  body('email').isEmail().withMessage('Please include a valid email'),
  body('password').notEmpty().withMessage('Password is required')
];

const updatePasswordValidation = [
  body('currentPassword').notEmpty().withMessage('Current password is required'),
  body('newPassword').isLength({ min: 6 }).withMessage('New password must be at least 6 characters')
];

// Validation error handler middleware
const handleValidationErrors = (req, res, next) => {
  const { validationResult } = require('express-validator');
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array()
    });
  }
  next();
};

// Public routes
router.post('/register', registerValidation, handleValidationErrors, authController.register);
router.post('/login', loginValidation, handleValidationErrors, authController.login);
router.post('/refresh-token', authController.refreshToken);
router.post('/forgot-password', authController.forgotPassword);
router.put('/reset-password/:token', authController.resetPassword);
router.get('/verify-email/:token', authController.verifyEmail);

// Protected routes
router.use(protect);

router.get('/me', authController.getMe);
router.put('/update-profile', authController.updateProfile);
router.put('/update-password', updatePasswordValidation, handleValidationErrors, authController.updatePassword);
router.put('/avatar', upload.single('avatar'), authController.uploadAvatar);
router.post('/logout', authController.logout);

// Admin only routes
router.get('/admin/users', authorize('admin', 'super_admin'), /* admin controller */);
router.put('/admin/users/:id', authorize('admin', 'super_admin'), /* admin controller */);

module.exports = router;