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
        const token = await userServices.login(email, password);
        res.cookie("auth", token, {httpOnly: true});
        res.status(304);
        res.redirect('/')
       
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

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await userServices.login(email, password);
        res.cookie("auth", token, {httpOnly: true});
        res.redirect('/')

    } catch(e) {
        console.log(e.message);
        const errorMessages = extractErrorMessage(e);
        res.render('login', { errorMessages })
    }
})

router.get('/logout', (req, res) => {
    res.clearCookie('auth');
    res.status(304);
    res.redirect('/')
})

module.exports = router;