const router = require('express').Router();
const {getUserStatus} = require('../utils/auth');

router.get('/', getUserStatus, (req, res) => {
    if (req.isLoggedIn) {
        res.send('User Home');
    } else {
        res.send('Guest Home');
    }
});

module.exports = router;