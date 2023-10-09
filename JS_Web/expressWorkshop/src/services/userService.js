const User = require('../models/User');
const bcrypt = require('bcrypt')

exports.createUser = async (username, password) => {
    return User.create({
        username: username,
        password: await bcrypt.hash(password, 10)
    })
}

exports.findSingleUser = async (username) => {
    return await User.findOne({ username });
}