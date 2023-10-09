const userService = require('../services/userService');
const bcrypt = require('bcrypt');
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
        if (!user) {
            throw new Error('User not found');
        }
        const passwordIsValid = await bcrypt.compare(password, user.password);
        if (!passwordIsValid) {
            throw new Error('Password is not valid');
        }
        

    } catch(e) {
        console.log(e.message);
        throw e;
    }
}