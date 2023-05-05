const express = require('express');
const apiRoutes = require('./api/users.js');
//const webRoutes = require('./web/');
const authMiddleware = require('./middleware/auth.js');

const router = express.Router();

// Register API routes
//router.use('/api',authMiddleware, apiRoutes);

router.use('/api',apiRoutes);

// Register web routes
// router.use('/', webRoutes);

module.exports = router;
