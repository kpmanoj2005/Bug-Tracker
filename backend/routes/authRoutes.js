//Express-HTTP server framework
//sending responses from the client and receiving responses from the server
//bcrypt - Password hashing library

const express = require('express');
const { registerUser, login } = require('../controllers/authController');
const User = require('../models/User');

//create a new router instance
const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
router.post('/login', login);

//export the router to use in main app
module.exports = router;
