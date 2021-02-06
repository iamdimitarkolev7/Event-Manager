const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const secret = 'secret';

module.exports = (app) => {
    app.use(cookieParser(secret));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cors());
};