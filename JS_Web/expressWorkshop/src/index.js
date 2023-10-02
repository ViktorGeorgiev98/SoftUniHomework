// Main file with the logic of our application


// Imports
const express = require('express');
const expressConfig = require('./config/expressConfig')
const handlebarsConfig = require('./config/handlebarsConfig');
const router = require('./router');
const dbConnect = require('./config/dbConfig')
// Constants and variables
const app = express();
const PORT = 5050;

// Express setup
expressConfig(app);

// Handlebars setup
handlebarsConfig(app);

// DB connection
dbConnect();
// Routing
app.use(router);

// Server listen to port

app.listen(PORT, () => console.log(`Server is listening to port ${PORT}`));