const express = require('express');
const apiRoutes = require('./api');
const webRoutes = require('./web');
const authMiddleware = require('./middleware/auth');

const router = express.Router();

// Register API routes
router.use('/api', authMiddleware, apiRoutes);

// Register web routes
router.use('/', webRoutes);

module.exports = router;
