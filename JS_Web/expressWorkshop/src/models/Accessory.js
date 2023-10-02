const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: String,
    imageUrl: String,
    description: String,
    cubes: [
        {
          type: mongoose.Types.ObjectId, // type from mongo
          ref: "Cube", // the name of the model
        },
      ],
})

const Accessory = mongoose.model('Acessory', accessorySchema);

module.exports = Accessory;