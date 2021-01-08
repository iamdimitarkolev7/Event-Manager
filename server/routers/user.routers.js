require('dotenv').config();
const router = require('express').Router();
const { getUserStatus, saveUser, verifyUser } = require('../utils/auth');
const validationRegister = require('../utils/validationRegister');
const validationLogin = require('../utils/validationLogin');
const { validationResult } = require('express-validator');

router.get('/register', getUserStatus, (req, res) => {
    if (req.isLoggedIn) {
        res.send('Already logged in');
    } else {
        res.send('Needs registration');
    }
});

router.get('/login', getUserStatus, (req, res) => {
    if (req.isLoggedIn) {
        res.send('Already logged in');
    } else {
        res.send('Needs logging in');
    }
});

router.get('/logout', getUserStatus, (req, res) => {
    if (req.isLoggedIn) {
        res.clearCookie(process.env.COOKIE);
        res.send('Successfully logged out');
    } else  {
        res.send('No logged in user! Cannot logout');
    }
});

router.post('/register', validationRegister, async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.send(errors.array()[0].msg);
    }

    try {
        await saveUser(req, res);
        res.redirect('/');
    } catch (err) {
        res.send(err.message);
    }
});

router.post('/login', validationLogin, async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.send({message: errors.array()[0].msg});
    }


    const status = await verifyUser(req, res);

    if (status) {
        return res.redirect('/');
    }

    res.send('Wrong username or password');
});

module.exports = router;