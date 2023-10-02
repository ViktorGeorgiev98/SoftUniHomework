// TODO
// Configure mongo DB for our app


const mongoose = require('mongoose');
const URL = "mongodb://localhost:27017/Cubicle"	

async function dbConnect() {
    try {
        await mongoose.connect(URL);
        console.log("Connected to DB")
    } catch(e) {
        console.log(e.message);
        throw e;
    }
    
}

module.exports = dbConnect;

