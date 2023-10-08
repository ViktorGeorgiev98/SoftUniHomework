const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true, minLength: 5}
})


const User = new mongoose.model('User', userSchema);

module.exports = User;