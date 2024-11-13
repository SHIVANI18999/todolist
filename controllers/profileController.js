const User = require('../models/userModel');

const updateProfile = (req, res) => {
  const { name, email, password } = req.body;
  const userId = req.user.userId;

  User.updateProfile(userId, name, email, password, (err) => {
    if (err) return res.status(500).json({ message: 'Error updating profile' });
    res.json({ message: 'Profile updated' });
  });
};

module.exports = { updateProfile };
