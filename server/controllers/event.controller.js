const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        const limit = Number(req.query.limit);

        if (limit) {
            models.Event.find().sort('name').limit(limit).populate('admin')
                .exec(function (err, events) {
                    res.send(events);
                })
        } else {
            models.Event.find().populate('admin')
                .then((events) => res.send(events))
                .catch(next);
        }
    },

    post: (req, res, next) => {
        const { description, location, name, date, imageURL } = req.body;
        const { _id } = req.user;

        models.Event.create({ description, location, name, date, imageURL, admin: _id })
            .then((createdEvent) => {
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { createdEvents: createdEvent } }),
                    models.Event.findOne({ _id: createdEvent._id })
                ]);
            })
            .then(([modifiedObj, origamiObj]) => {
                res.send(origamiObj);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { description } = req.body;
        models.Event.updateOne({ _id: id }, { description })
            .then((updatedEvent) => res.send(updatedEvent))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Event.deleteOne({ _id: id })
            .then((deletedEvent) => res.send(deletedEvent))
            .catch(next)
    }
};