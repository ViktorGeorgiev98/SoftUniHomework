const User = require('../models/User');
const jwt = require('../lib/jtw')
const bcrypt = require('bcrypt');
const { SECRET } = require('../constants');

exports.register = async (firstName, lastName, email, password) => {
     return await User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
     });
}


exports.findOneUser = async (value) => {
    return await User.findOne({email: value});
}


exports.login = async (email, password) => {
    const user = await User.findOne({email: email});
    if (!user) {
       throw new Error("No such username or email!");
    }
    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
       throw new Error("Invalid password!");
    }
    const payload = {
       _id: user._id,
       username: user.username
    }

    const token = await jwt.sign(payload, SECRET, {expiresIn: "3d"});
    return token;
}