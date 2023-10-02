// Service for cubes (CREATE NEW ONE AND GET ALL)
const uniqid = require("uniqid");
const Cube = require('./../models/Cube');


// const cubes = [
//     {
//         _id: '321321312',
//         name: 'Very cool cube',
//         description: 'Very cool cube is named like this because it is very easy for beginners to learn',
//         imageUrl: 'https://m.media-amazon.com/images/I/61Oj2aphXQL._AC_UF1000,1000_QL80_.jpg',
//         difficultyLevel: '1'
//     }
// ];


exports.create = async (cubeName, description, imageUrl, difficultyLevel) => {
    const newCube = await Cube.create({
        name: cubeName,
        description: description,
        imageUrl: imageUrl,
        difficultyLevel: difficultyLevel
    });

    return newCube;
}


exports.getAllCubes = async () => {
    return await Cube.find().lean();
}


exports.findSingleCube = async (id) => {
    return await Cube.findById(id).lean();
}