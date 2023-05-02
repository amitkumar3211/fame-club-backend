// userController.js

const client = require('../config/index');

const User = require('../models/user');
const jwt = require('jsonwebtoken');
exports.createUser = async (req, res, next) => {

  try {

    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    console.log(existingUser);
    if(existingUser){
      return res.status(400).json({ error: 'User already exists' });
    }

    const user = new User({ name, email, password });
    await user.save();
    console.log(user);
      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

      // Send token back to client
      res.status(200).json({ token });
    
  } catch (error) {
    next(error);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, { name, email, password }, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted' });
  } catch (error) {
    next(error);
  }
};
