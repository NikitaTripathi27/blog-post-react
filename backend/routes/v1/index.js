const express = require('express');
const userRoutes = require('./users.routes');
const authRoutes = require('./auth.routes');
const blogroutes = require('./blogs.routes')
const router = express.Router();

router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/blog',blogroutes)

module.exports = router;