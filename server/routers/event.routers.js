const router = require('express').Router();
const { getUserStatus, checkAuthentication } = require('../utils/auth');
const Event = require('../models/Event');

router.get('/create', getUserStatus, checkAuthentication, (req, res) => {
    if (req.isLoggedIn) {
        res.send('Create Page for user: ' + req.user.username);
    } else {
        res.send('Cannot access this page from not authenticated user!');
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
    if (req.isLoggedIn) {
        res.send('Edit Page for user: ' + req.user.username);
    } else {
        res.send('Cannot access this page from not authenticated user!');
    }
});

router.get('/details/:id', checkAuthentication, getUserStatus, async (req, res) => {
    const id = req.params.id;
    const event = await Event.findById(id).lean();
    const isAdmin = event.admin.toString() === req.user._id.toString();

    res.send({...event, isAdmin});
});

router.get('/like/:id', checkAuthentication, async (req, res) => {
    const id = req.params.id;
    const {_id} = req.user;
    const event = await Event.findById(id).lean();
    const isAdmin = event.admin.toString() === req.user._id.toString();

    if (!isAdmin) {
        await Event.findByIdAndUpdate(id, {
            $addToSet: {
                likes: [_id]
            }
        });
        res.send('You liked ' + event.name);
    } else {
        res.send('This action is not for admins!');
    }
});

router.get('/interestedIn/:id', checkAuthentication, async (req, res) => {
    const id = req.params.id;
    const {_id} = req.user;
    const event = await Event.findById(id).lean();
    const isAdmin = event.admin.toString() === req.user._id.toString();

    if (!isAdmin) {
        await Event.findByIdAndUpdate(id, {
            $addToSet: {
                interestedIn: [_id]
            }
        });
        res.send('Interested in ' + event.name);
    } else {
        res.send('This action is not for admins!');
    }
});

router.get('/going/:id', checkAuthentication, async (req, res) => {
    const id = req.params.id;
    const {_id} = req.user;
    const event = await Event.findById(id).lean();
    const isAdmin = event.admin.toString() === req.user._id.toString();

    if (!isAdmin) {
        await Event.findByIdAndUpdate(id, {
            $addToSet: {
                going: [_id]
            }
        });

        res.send('Going on ' + event.name);
    } else {
        res.send('This action is not for admins!');
    }
});

router.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    const event = await Event.findById(id).lean();
    const isAdmin = event.admin.toString() === req.user._id.toString();

    if (isAdmin) {
        await Event.findByIdAndDelete(id);
        res.send('Successfully deleted!');
    } else {
        res.send('Cannot perform that task! Only for admins!');
    }
});

module.exports = router;