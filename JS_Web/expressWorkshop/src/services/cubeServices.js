// Service for cubes (CREATE NEW ONE AND GET ALL)
const uniqid = require("uniqid");
const cubes = [
    {
        _id: '321321312',
        name: 'Very cool cube',
        description: 'Very cool cube is named like this because it is very easy for beginners to learn',
        imageUrl: 'https://m.media-amazon.com/images/I/61Oj2aphXQL._AC_UF1000,1000_QL80_.jpg',
        difficultyLevel: '1'
    }
];


exports.create = (cubeName, description, imageUrl, difficultyLevel) => {
    const newCube = {
        _id: uniqid(),
        name: cubeName,
        description: description,
        imageUrl: imageUrl,
        difficultyLevel: difficultyLevel
    }

    cubes.push(newCube);
    return newCube;
}


exports.getAllCubes = () => {
    return cubes.slice();
}


exports.findSingleCube = (id) => {
    return cubes.find((c) => c._id === id);
}