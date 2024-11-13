const express = require('express');
const router = express.Router();
const { updateProfile } = require('../controllers/profileController');
const verifyToken = require('../middleware/verifyToken');

router.put('/profile', verifyToken, updateProfile);

module.exports = router;
