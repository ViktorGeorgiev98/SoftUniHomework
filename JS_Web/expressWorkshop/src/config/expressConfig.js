// Configuration for express static files

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const { auth } = require('../middleware/authMiddleware');

const expressConfig = ((app) => {
    app.use(express.static(path.resolve(__dirname, '../public')));
    app.use(express.urlencoded({ extended : false }));
    app.use(cookieParser());
    app.use(auth);
})

module.exports = expressConfig;