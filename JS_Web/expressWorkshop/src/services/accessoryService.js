
const Accessory = require('../models/Accessory');

exports.create = async (name, description, imageUrl) => {
    const newAcc = await Accessory.create({
        name: name,
        description: description,
        imageUrl: imageUrl,
    });

    return newAcc;
}

exports.getAllAcc = async () => await Accessory.find().lean();

exports.getWithoutOwned = (accessoryIds) => {
    // $nin => NOT IN
    return Accessory.find({ _id: { $nin: accessoryIds } });
  };