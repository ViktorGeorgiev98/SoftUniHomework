const User = require('../models/User');
const bcrypt = require('bcrypt')

exports.createUser = (username, password) => {
    return User.create({
        username: username,
        password: bcrypt.hash(password, 10)
    })
}