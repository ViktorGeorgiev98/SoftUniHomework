// Router for our applciation
const cubeService = require('./services/cubeServices');
const accessoryService = require('./services/accessoryService');
const userService = require('./services/userService');
const { register, login, difficultyLevelOptionsViewData  } = require('./utils/utils');
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
    await cubeService.create(formData.name,formData.description, formData.imageUrl, formData.difficultyLevel, request.user);
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
    let isOwner = false;
    if(currentCube.owner && request.user) {
        if (currentCube.owner.toString() === request.user._id) {
            isOwner = true;
        }
    }
    console.log("is owner = ", isOwner);
    const hasAccessories = currentCube.accessories?.length > 0;
    response.status(200);
    response.render('details', { currentCube, hasAccessories, isOwner });
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

router.get('/delete-cube-page/:id', async (request, response) => {
    const id = request.params.id;
    const cubeToDelete = await cubeService.findSingleCube(id);
    response.status(200);
    response.render('deleteCubePage', {cubeToDelete});
})

router.post('/delete-cube-page/:id', async (request, response) => {
    const id = request.params.id;
    console.log(`id to delete is ${id}`);
    await cubeService.deleteCube(id);
    response.redirect('/');
})

router.get('/edit-cube-page/:id', async (request, response) => {
    const id = request.params.id;
    const cubeToEdit = await cubeService.findSingleCube(id);
    const options = difficultyLevelOptionsViewData(cubeToEdit.difficultyLevel);
    // Create an object to hold the selected option based on difficultyLevel
    response.status(200)
    response.render('editCubePage', { cubeToEdit, options });
})

router.post('/edit-cube-page/:id', async (request, response) => {
    const id = request.params.id;
    console.log('id to edit is', id);
    const { name, description, imageUrl,  difficultyLevel } = request.body;
    const payload = { name, description, imageUrl,  difficultyLevel }
    await cubeService.editCube(id, payload);
    response.redirect(`/cubes/${id}/details`);
})

router.get('/register', (request, response) => {
    response.status(200);
    response.render('registerPage');
})

router.post('/register', async (request, response) => {
    const { username, password, repeatPassword } = request.body;
    console.log(username, password, repeatPassword)
    const newUser = await register(username, password, repeatPassword);
    response.status(304);
    response.redirect('/login');
})

router.get('/login', (request, response) => {
    response.status(200);
    response.render('loginPage');
})

router.post('/login', async (request, response) => {
    const { username, password } = request.body;
    const token = await login(username, password);
    response.cookie("auth", token, {httpOnly: true});
    response.redirect('/')
})

router.get('/logout', (request, response) => {
    response.clearCookie('auth');
    response.redirect('/');
})

router.get('*', (request, response) => {
    response.status(404);
    response.render('404')
})

module.exports = router;

