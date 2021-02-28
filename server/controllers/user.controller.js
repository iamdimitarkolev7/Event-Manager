require('dotenv').config();
const models = require('../models');
const utils = require('../utils');

module.exports = {
    get: {
         all: (req, res, next) => {
            models.User.find()
                .then((users) => res.send(users))
                .catch(next)
        },
        one: (req, res, next) => {
             const {_id} = req.user;

             models.User.findById(_id)
                 .populate('likedEvents')
                 .populate('createdEvents')
                 .exec(function (err, result) {
                     if (err) {
                         console.log(err);
                     } else {
                         res.send(result);
                     }
                 });
        }
    },

    post: {
        register: (req, res, next) => {
            const { firstName, lastName, username, password } = req.body;
            models.User.create({ firstName, lastName, username, password })
                .then((createdUser) => {
                    const token = utils.jwt.createToken({ id: createdUser._id });
                    res.cookie(process.env.COOKIE, token).send(createdUser);
                })
                .catch(next)
        },

        login: (req, res, next) => {
            const { username, password } = req.body;
            models.User.findOne({ username })
                .then((user) => !!user ? Promise.all([user, user.matchPassword(password)]) : [null, false])
                .then(([user, match]) => {
                    if (!match) {
                        res.status(401).send('Invalid username or password');
                        return;
                    }

                    const token = utils.jwt.createToken({ id: user._id });
                    res.cookie(process.env.COOKIE, token).send(user);
                })
                .catch(next);
        },

        logout: (req, res, next) => {
            const token = req.cookies[process.env.COOKIE];
            models.TokenBlacklist.create({ token })
                .then(() => {
                    res.clearCookie(process.env.COOKIE).send('Logout successfully!');
                })
                .catch(next);
        }
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.User.deleteOne({ _id: id })
            .then((removedUser) => res.send(removedUser))
            .catch(next)
    }
};