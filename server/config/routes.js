const homeRouters = require('../routes/home.routers');
const userRouters = require('../routes/user.routers');
const eventRouters = require('../routes/event.routers');

module.exports = (app) => {
    app.use('/', homeRouters);
    app.use('/user', userRouters);
    app.use('/event', eventRouters);
    app.use('*', (req, res, next) => res.send('<h1> Something went wrong. Try again. :thumbsup: </h1>'))
};