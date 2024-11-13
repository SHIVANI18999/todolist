const bcrypt = require('bcryptjs');
const jwt = require('jwt-simple');
const { v4: uuidv4 } = require('uuid');
const User = require('../models/userModel');

const register = (req, res) => {
  const { name, email, password } = req.body;
  const userId = uuidv4();
  
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) return res.status(500).json({ message: 'Error hashing password' });

    User.createUser(userId, name, email, hashedPassword, (err) => {
      if (err) return res.status(500).json({ message: 'Error creating user' });
      res.status(201).json({ message: 'User created' });
    });
  });
};

const login = (req, res) => {
  const { email, password } = req.body;

  User.getUserByEmail(email, (err, user) => {
    if (err || !user) return res.status(400).json({ message: 'User not found' });

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err || !isMatch) return res.status(400).json({ message: 'Invalid password' });

      const token = jwt.encode({ userId: user.id }, process.env.SECRET_KEY);
      res.json({ token });
    });
  });
};

module.exports = { register, login };
