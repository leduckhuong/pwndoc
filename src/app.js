const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET_KEY, {
    maxAge: 60 * 60 * 24 * 1000  // 24 hours
}));

module.exports = app;