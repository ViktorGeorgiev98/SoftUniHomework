const Creature = require('../models/Creature');


exports.getAllCreatures = async () => {
    return Creature.find().lean();
}

exports.createCreature = async (name, species, skinColor, eyeColor, image, description, owner) => {
    return await Creature.create({name, species, skinColor, eyeColor, image, description, owner});
}

exports.findSingleCreatur = async (id) => {
    return Creature.findById(id).lean();
}

exports.deleteCreature = async (id) => {
    return Creature.findByIdAndDelete(id);
}

exports.editCreature = async (id, name, species, skinColor, eyeColor, image, description) => {
    return await Creature.findByIdAndUpdate(id, {
        name: name,
        species: species,
        skinColor: skinColor,
        eyeColor: eyeColor,
        image: image,
        description: description
    });
}