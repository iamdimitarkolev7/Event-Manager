const { body } = require('express-validator');

module.exports = [
    body('firstName', 'The first name should have only letters')
        .custom((value) => {
            const regex = /[A-Za-z]+/g;
            if (!value.match(regex)) {
                throw new Error('The first name should have only letters');
            }

            return true;
        }),
    body('lastName', 'The last name should have only letters')
        .custom((value) => {
            const regex = /[A-Za-z]+/g;
            if (!value.match(regex)) {
                throw new Error('The last name should have only letters');
            }

            return true;
        }),
    body('username', 'The username should have only letters and digits')
        .custom((value) => {
            const regex = /[A-Za-z0-9]+/g;
            if (value.length < 3 && !value.match(regex)) {
                throw new Error('The username should have only letters and digits');
            }

            return true;
        }),
    body('password', 'The password should have only letters and digits')
        .custom((value) => {
            const regex = /[A-Za-z0-9]+/g;
            if (value.length < 3 && !value.match(regex)) {
                throw new Error('The password should have only letters and digits');
            }

            return true;
        })
];