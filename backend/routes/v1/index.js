const express = require('express');
const userRoutes = require('./users.routes');
const authRoutes = require('./auth.routes');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/users', authRoutes);

module.exports = router;