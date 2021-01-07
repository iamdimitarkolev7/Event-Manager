require('dotenv').config();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const generateToken = data => {
    const token = jwt.sign(data, process.env.PRIVATE_KEY);
    return token;
}

const saveUser = async (req, res) => {
    const { firstName, lastName, username, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = new User({
        firstName,
        lastName,
        username,
        password: hash,
        createdEvents: []
    });

    try {
        const userObject = await user.save();
        const token = generateToken({
            userID: userObject._id,
            username: userObject.username
        })
        res.cookie(process.env.COOKIE, token);
        return true;
    } catch (err) {
        console.log(err);
    }
}

const verifyUser = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne( { username });
    if ( !user ) {
        return false;
    }

    const status = await bcrypt.compare(password, user.password);
    if (status) {
        const token = generateToken({
            userID: user._id,
            username: user.username
        });
        res.cookie(process.env.COOKIE, token);
    }
    return status;
}

const getUserStatus =  (req, res, next) => {
    const token = req.cookies[process.env.COOKIE];

    if(!token) {
        req.isLoggedIn = false;
    }

    try {
        jwt.verify(token, process.env.PRIVATE_KEY);
        req.isLoggedIn = true;
    } catch(e) {
        req.isLoggedIn = false;
    }
    next()

}

const checkGuestAccess = (req, res, next)=> {
    const token = req.cookies[process.env.COOKIE];
    if(token) {
        return res.redirect('/');
    }
    next();
}

const checkAuthentication = async (req, res, next) => {
    const token = req.cookies[process.env.COOKIE];
    if(!token) {
        return res.redirect('/login');
    }

    try {
        decodedObject = jwt.verify(token, process.env.PRIVATE_KEY);
        const user = await User.findById(decodedObject.userID);
        req.user = user;
        next();
    } catch(e) {
        return res.redirect('/login');
    }

}

module.exports = {
    saveUser,
    verifyUser,
    getUserStatus,
    checkGuestAccess,
    checkAuthentication
}