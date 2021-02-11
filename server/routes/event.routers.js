const controllers = require('../controllers/');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.event.get);

router.post('/create', auth(), controllers.event.post.create);

router.put('/like/:id', auth(), controllers.event.put.like);

router.put('/:id', auth(), controllers.event.put.edit);

router.delete('/delete/:id', auth(), controllers.event.delete);

module.exports = router;