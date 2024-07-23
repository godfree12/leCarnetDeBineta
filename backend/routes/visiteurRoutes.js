// routes/visiteurRoutes.js
const express = require('express');
const router = express.Router();
const visiteurController = require('../controllers/visiteurController');

router.post('/register', visiteurController.signup);
router.post('/login', visiteurController.login);

module.exports = router;
