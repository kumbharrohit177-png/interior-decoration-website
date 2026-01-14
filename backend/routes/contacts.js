const express = require('express');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');

const router = express.Router();

router.post(
  '/',
  body('name').notEmpty(),
  body('email').isEmail(),
  body('message').notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
        subject: `New contact from ${req.body.name}`,
        text: JSON.stringify(req.body, null, 2),
      });

      res.json({ ok: true });
    } catch (e) {
      res.status(500).json({ message: 'Failed to send email', error: e.message });
    }
  }
);

module.exports = router;
