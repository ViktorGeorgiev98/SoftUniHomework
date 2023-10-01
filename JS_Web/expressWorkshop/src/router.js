// Router for our applciation
const cubeService = require('./services/cubeServices');
const express = require('express');
const router = express.Router();


router.get('/', (request, response) => {
    response.status(200);
    const cubes = cubeService.getAllCubes();
    response.render('index', {cubes});
})

router.get('/cubes/create', (request, response) => {
    response.status(200);
    response.render('create');
})

router.post('/cubes/create', (request, response) => {
    const formData = request.body;
    cubeService.create(formData.name,formData.description, formData.imageUrl, formData.difficultyLevel);
    response.redirect("/");
})

router.get('/cubes/:id/details', (request, response) => {
    const id = request.params.id;
    const currentCube = cubeService.findSingleCube(id);
    console.log(`Current cube is ${currentCube}`)
    if (!currentCube) {
        res.redirect("/404");
        return;
    }
    response.status(200);
    response.render('details', {...currentCube});
})
router.get('/about', (request, response) => {
    response.status(200);
    response.render('about');
})

router.get('*', (request, response) => {
    response.status(404);
    response.render('404')
})

module.exports = router;

