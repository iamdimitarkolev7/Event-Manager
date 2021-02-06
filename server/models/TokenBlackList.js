const mongoose = require('mongoose');

const TokenBlacklist = new mongoose.Schema({
    token: String
});

module.exports = new mongoose.model('TokenBlacklist', TokenBlacklist);