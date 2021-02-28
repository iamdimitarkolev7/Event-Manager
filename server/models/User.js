const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

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
   },
    createdEvents: [{ type: mongoose.Types.ObjectId, ref: "Event" }],
    likedEvents: [{type: mongoose.Types.ObjectId, ref: "Event"}]
});

UserSchema.methods = {

    matchPassword: function (password) {
        return bcrypt.compare(password, this.password);
    }

};

UserSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(this.password, salt, (err, hash) => {
                if (err) { next(err); return }
                this.password = hash;
                next();
            });
        });
        return;
    }
    next();
});

module.exports = mongoose.model('User', UserSchema);