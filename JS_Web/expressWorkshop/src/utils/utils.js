const userService = require('../services/userService');
const bcrypt = require('bcrypt');
const  SECRET = "e1c22f91-8048-48d5-bda8-6df6897aa326";
const jwt = require('../lib/jwt');
exports.register = async (username, password, rePassword) => {
    try {
        if (!username || !password || !rePassword) {
            throw new Error('All fields are mandatory!!!');
        }
        if (password !== rePassword) {
            throw new Error('Password and repeat password must be the same!!!')
        }
        return await userService.createUser(username, password);
    } catch(e) {
        console.log(e.message);
        throw(e);
    }
}

exports.login = async (username, password) => {
    try {
        if (!username || !password) {
            throw new Error('Username and password are mandatory!!!');
        }  

        const user = await userService.findSingleUser(username);
        console.log({ user });
        if (!user) {
            throw new Error('User not found');
        }
        const passwordIsValid = await bcrypt.compare(password, user.password);
        if (!passwordIsValid) {
            throw new Error('Password is not valid');
        }
        const payload = {
            _id: user._id,
            username: user.username
        };

        const token = await jwt.sign(payload, SECRET, { expiresIn: "3d"});

        return token;
        

    } catch(e) {
        console.log(e.message);
        throw e;
    }
}