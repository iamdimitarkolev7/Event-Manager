const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Home');
});

module.exports = router;