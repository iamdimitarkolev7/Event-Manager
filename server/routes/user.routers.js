const controllers = require('../controllers/');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.user.get.all);

router.get('/:id', auth(), controllers.user.get.one)

router.post('/register', controllers.user.post.register);

router.post('/login', controllers.user.post.login);

router.post('/logout', controllers.user.post.logout);

router.delete('/:id', controllers.user.delete);

module.exports = router;