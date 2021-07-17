const router = require('express').Router();

// Register User
router.post('/register', (req, res) => {
    res.json({msg: "Register a user"})
})

// Log in User
router.post('/login', (req, res) => {
    res.json({msg: "Log in a user"})
})


module.exports = router;