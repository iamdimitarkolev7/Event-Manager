const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
   firstName: {
       type: String,
       required: true
   },
   lastName: {
       type: String,
       required: true
   },
   username: {
       type: String,
       required: true,
       unique: true,
       lowercase: true,
       minlength: 3,
       maxlength: 50
   },
   password: {
       type: String,
       required: true,
       minlength: 6,
       maxlength: 255
   }
});

module.exports = mongoose.model('User', UserSchema);