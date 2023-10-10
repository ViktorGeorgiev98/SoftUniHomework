// Mongoose (Mongo DB) model for Cube

const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {type: String, required: true, minLength: 3},
    description: {type: String, required: true, minLength: 2},
    imageUrl: {type: String, required: true, minLength: 3},
    difficultyLevel: {type: String, required: true},
    accessories: [
        {
          type: mongoose.Types.ObjectId, // type from mongo
          ref: "Accessory", // the name of the model
        },
      ],
      owner: {
        type: mongoose.Types.ObjectId,
        ref: "User" // type from mongo
      }
})

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;