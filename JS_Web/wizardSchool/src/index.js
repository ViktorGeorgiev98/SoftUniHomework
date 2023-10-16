// imports
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const { PORT, URL } = require('./constants')
const cookieParser = require('cookie-parser');
const handlebars = require('express-handlebars');
const routing = require('./router');

// constants and variables
const app = express();

// express config
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.resolve(__dirname, './public')));
app.use(cookieParser());
// handlebars config
app.engine('hbs', handlebars.engine({extname: 'hbs'}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

// DB config
async function dbConnect() {
    try {
        await mongoose.connect(URL);
        console.log("Connected to DB")
    } catch(e) {
        console.log(e.message);
        throw e;
    }
    
}

dbConnect();

// routing
app.use(routing);

// listen to port
app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}...`));