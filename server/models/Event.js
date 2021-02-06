const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        minlength: 3
    },
    imageURL: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    location: {
      type: String,
      required: true
    },
    admin: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    likes: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]
});

module.exports = mongoose.model('Event', EventSchema);