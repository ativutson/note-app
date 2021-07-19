const router = require('express').Router();
const userCtrl = require('../controllers/userCtrl');

// Register User
router.post('/register', userCtrl.registerUser)

// Log in User
router.post('/login', userCtrl.loginUser)

// Verify Token
router.get('/verify', userCtrl.verifiedToken)


module.exports = router;