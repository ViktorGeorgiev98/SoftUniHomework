const router = require('express').Router();
const userServices = require('../services/userService');
const { extractErrorMessage } = require('../utils/errorHandler');

router.get('/register', (req, res) => {
    res.render('register')
});

router.post('/register', async (req, res) => {
    const { firstName, lastName, email, password, repeatPassword} = req.body;

    try {
        if (password !== repeatPassword) {
            throw new Error('Password missmatch!');
        }
        const newUser = await userServices.register(firstName, lastName, email, password);
        console.log(newUser);
        res.status(304);
        res.redirect('/user/login');
    } catch(e) {
        console.log(e.message);
        res.status(404);
        const errorMessages = extractErrorMessage(e);
        console.log('Current error is: ',errorMessages)
        res.render('register', { errorMessages })
    }
})

router.get('/login', (req, res) => {
    res.render('login');
})

module.exports = router;