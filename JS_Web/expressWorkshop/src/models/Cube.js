// Mongoose (Mongo DB) model for Cube

const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {type: String, required: true, minLength: 3},
    description: {type: String, required: true, minLength: 3},
    imageUrl: {type: String, required: true, minLength: 3},
    difficultyLevel: {type: String, required: true}
})

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;