require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const homeRouters = require('../server/routers/home.routers');
const userRouters = require('../server/routers/user.routers');

const app = express();

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false},
    (err) => {
        if (err) {
            console.log(err);
            throw err;
    }});
mongoose.connection.once('open', () => console.log('Connected to MongoDB'));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', homeRouters);
app.use('/user', userRouters);

app.listen(process.env.PORT, () => console.log('Server listening on port ' + process.env.PORT));