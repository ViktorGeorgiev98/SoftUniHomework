const User = require('../models/User');


exports.register = (firstName, lastName, email, password) => {
     return User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
     });
}