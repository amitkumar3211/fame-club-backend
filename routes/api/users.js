const express = require('express');
const router = express.Router();

// Route handlers for /api/users
router.get('/', (req, res) => {
  res.status(200).send({data: 'test'});
  // Get all users
});

router.get('/:id', (req, res) => {
  // Get user by ID
});

router.post('/adduser', (req, res) => {

  res.status(200).send({data: req.body});
  // Create a new user
});

router.put('/:id', (req, res) => {
  // Update user by ID
});

router.delete('/:id', (req, res) => {
  // Delete user by ID
});

module.exports = router;
