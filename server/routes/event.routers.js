const controllers = require('../controllers/');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.event.get.all);

router.get('/details/:id', controllers.event.get.details);

router.post('/create', auth(), controllers.event.post.create);

router.put('/like/:id', auth(), controllers.event.put.like);

router.put('/dislike/:id', auth(), controllers.event.put.dislike);

router.put('/edit/:id', auth(), controllers.event.put.edit);

router.delete('/delete/:id', auth(), controllers.event.delete);

module.exports = router;