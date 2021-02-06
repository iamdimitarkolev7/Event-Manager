require('dotenv').config();
const models = require('../models');

module.export = {
    get: (req, res, next) => {
        models.User.find()
            .then((users) => res.send(users))
            .catch(next)
    }
};