const userService = require('../services/userService');
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