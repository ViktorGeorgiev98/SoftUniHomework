const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {type: String},
    imageUrl: {type: String},
    description: {type: String},
    cubes: [
        {
          type: mongoose.Types.ObjectId, // type from mongo
          ref: "Cube", // the name of the model
        },
      ],
})

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;