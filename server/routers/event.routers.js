const router = require('express').Router();
const { getUserStatus, checkAuthentication } = require('../utils/auth');
const Event = require('../models/Event');

router.get('/create', getUserStatus, checkAuthentication, (req, res) => {
    if (req.isLoggedIn) {
        res.send('Create Page for user: ' + req.user.username);
    } else {
        res.send('Cannot access this page from logged out user!');
    }
});

router.post('/create', checkAuthentication, async (req, res) => {
   try {
       const { name, description, imageURL, date, location, } = req.body;
       const { _id } = req.user;

       const event = new Event({
           name,
           description,
           imageURL,
           date,
           location,
           admin: _id,
           likes: [],
           interestedIn: [],
           going: []
       });

       await event.save();
       res.send('Successfully created event!');
   } catch (err) {
       res.send(err.message);
   }
});

router.get('/edit/:id', (req, res) => {

});

router.get('/details/:id', checkAuthentication, getUserStatus, async (req, res) => {
    const id = req.params.id;
    const event = await Event.findById(id).lean();
    const isAdmin = event.admin.toString() === req.user._id.toString();

    res.send({...event, isAdmin});
});

router.get('/like/:id', (req, res) => {

});

router.get('/interestedIn/:id', (req, res) => {

});

router.get('/going/:id', (req, res) => {

});

router.get('/delete/:id', (req, res) => {

});

module.exports = router;