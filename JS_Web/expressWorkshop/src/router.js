// Router for our applciation
const cubeService = require('./services/cubeServices');
const accessoryService = require('./services/accessoryService');
const express = require('express');
const router = express.Router();


router.get('/', async (request, response) => {
    response.status(200);
    const cubes = await cubeService.getAllCubes();
    response.render('index', {cubes});
})

router.get('/cubes/create', (request, response) => {
    response.status(200);
    response.render('create');
})

router.post('/cubes/create', async (request, response) => {
    const formData = request.body;
    await cubeService.create(formData.name,formData.description, formData.imageUrl, formData.difficultyLevel);
    response.redirect("/");
})

router.get('/cubes/:id/details', async (request, response) => {
    const id = request.params.id;
    const currentCube = await cubeService.findSingleCube(id);
    console.log(`Current cube is ${currentCube}`)
    if (!currentCube) {
        res.redirect("/404");
        return;
    }
    const hasAccessories = currentCube.accessories?.length > 0;
    response.status(200);
    response.render('details', {...currentCube, hasAccessories});
})
router.get('/about', (request, response) => {
    response.status(200);
    response.render('about');
})

router.get('/create/accessory', (request, response) => {
    response.status(200);
    response.render('createAccessory')
})

router.post('/create/accessory', async (request, response) => {
    const { name, description, imageUrl } = request.body;
    await accessoryService.create(name, description, imageUrl);
    response.redirect('/');
})

router.get('/attach-accessory/:id', async (request, response) => {
    const id = request.params.id;
    const cube = await cubeService.findSingleCube(id);
    const accessories = await accessoryService
    .getWithoutOwned(cube.accessories)
    .lean();
    const hasAccessories = accessories.length > 0; // view data, template data
    response.render('attachAccessory', { cube, accessories, hasAccessories })
})

router.post('/attach-accessory/:id', async (request, response) => {
    const cubeId = request.params.id;
    const { accessory: accessoryId } = request.body;
    console.log('cube id', cubeId);
    console.log('acc id', accessoryId)
    await cubeService.attachAccessory(cubeId, accessoryId);
    response.redirect(`/cubes/${cubeId}/details`);
})

router.get('*', (request, response) => {
    response.status(404);
    response.render('404')
})

module.exports = router;

