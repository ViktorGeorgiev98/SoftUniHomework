const router = require('express').Router();
const creatureService = require('../services/creatureService');
const { extractErrorMessage } = require('../utils/errorHandler');

router.get('/all', async (req, res) => {
    const allCreatures = await creatureService.getAllCreatures();
    console.log(allCreatures)
    const weHaveCreatures = allCreatures.length > 0;
    res.status(200);
    res.render('all-posts', { allCreatures, weHaveCreatures });
})


router.get('/create', (req, res) => {
    res.status(200);
    res.render('create');
})

router.post('/create', async (req, res) => {
    const { name, species, skinColor, eyeColor, image, description } = req.body;
    console.log({ name, species, skinColor, eyeColor, image, description});
    try {
        await creatureService.createCreature(name, species, skinColor, eyeColor, image, description, req.user)
        res.redirect('/posts/all');
    } catch(e) {
        console.log(e.message);
        res.status(404);
        const errorMessages = extractErrorMessage(e);
        console.log('Current error is: ',errorMessages)
        res.render('create', { errorMessages })
    }

})

router.get('/:id/details', async (req, res) => {
    const id = req.params.id;
    try {
        const creature = await creatureService.findSingleCreatur(id);
        let isOwner = false;
        if(creature.owner && req.user) {
            if (creature.owner.toString() === req.user._id) {
                isOwner = true;
            }
        }
        console.log("is owner = ", isOwner);
        res.status(200);
        res.render('details', { creature, isOwner });
    } catch(e) {
        console.log(e.message);
        res.status(404);
        const errorMessages = extractErrorMessage(e);
        console.log('Current error is: ',errorMessages)
        res.render('all-posts', { errorMessages })
    }
})

router.get('/:id/delete', async (req, res) => {
    const id = req.params.id;
    try {
        await creatureService.deleteCreature(id);
        res.status(304);
        res.redirect('/posts/all');
    } catch(e) {
        console.log(e.message);
        res.status(404);
        const errorMessages = extractErrorMessage(e);
        console.log('Current error is: ',errorMessages)
        res.render('all-posts', { errorMessages })
    }
})

router.get('/:id/edit', async (req, res) => {
    const id = req.params.id;
    try {
        const creature = await creatureService.findSingleCreatur(id);
        res.status(200);
        res.render('edit', { creature })
    } catch(e) {
        console.log(e.message);
        res.status(404);
        const errorMessages = extractErrorMessage(e);
        console.log('Current error is: ',errorMessages)
        res.render('all-posts', { errorMessages })
    }
})

router.post('/:id/edit', async (req, res) => {
    const id = req.params.id;
    try {
        const { name, species, skinColor, eyeColor, image, description } = req.body;
        await creatureService.editCreature(id, name, species, skinColor, eyeColor, image, description);
        res.status(304);
        res.redirect(`/posts/${id}/details`);
    } catch(e) {
        console.log(e.message);
        res.status(404);
        const errorMessages = extractErrorMessage(e);
        console.log('Current error is: ',errorMessages)
        res.render(`details`, { errorMessages })
    }
})

module.exports = router;