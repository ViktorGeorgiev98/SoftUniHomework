// imports
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const { PORT } = require('./constants')
const cookieParser = require('cookie-parser');
const handlebars = require('express-handlebars');
// constants and variables
const app = express();

// express config
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.resolve(__dirname, '../public')));
app.request(cookieParser());
// handlebars config
app.engine('hbs', handlebars.engine({extname: 'hbs'}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

// DB config


// routing


// listen to port
app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}...`));