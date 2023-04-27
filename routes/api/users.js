const express = require('express');
const { body, validationResult } = require('express-validator');
const { createUser } = require('../../controllers/userController');
const router = express.Router();

// Route handlers for /api/users
router.get('/', (req, res) => {
  res.status(200).send({data: 'test'});
  // Get all users
});

router.get('/:id', (req, res) => {
  // Get user by ID
});

router.post('/signup', createUser);


router.put('/:id', (req, res) => {
  // Update user by ID
});

router.delete('/:id', (req, res) => {
  // Delete user by ID
});

module.exports = router;
