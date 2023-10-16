const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200);
    res.render('home');
})

router.get('*', (req, res) => {
    res.status(404);
    res.render('404');
})


module.exports = router;