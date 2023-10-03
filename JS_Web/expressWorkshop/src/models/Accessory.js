const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {type: String},
    imageUrl: {type: String},
    description: {type: String}
})

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;