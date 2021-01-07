const { body } = require('express-validator');

module.exports = [

    body('username', 'The username should be at least 3 characters long and should consist only english letters and digits')
        .custom((value) => {
            const regex = /[A-Za-z0-9]+/g;
            if( value.length < 3 || !value.match(regex)) {
                throw new Error (`The username should be at least 3 characters long and should consist only english letters and digits`)
            }
            return true;
        }),
    body('password', 'The password should be at least 3 characters long and should consist only english letters and digits')
        .custom((value) => {
            const regex = /[A-Za-z0-9]+/g;
            if( value.length < 3 || !value.match(regex)) {
                throw new Error (`The password should be at least 3 characters long and should consist only english letters and digits`)
            }

            return true;
        }),

]