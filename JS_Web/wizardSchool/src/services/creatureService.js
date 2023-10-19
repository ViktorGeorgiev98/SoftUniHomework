const Creature = require('../models/Creature');


exports.getAllCreatures = async () => {
    return Creature.find().lean();
}

exports.createCreature = async (name, species, skinColor, eyeColor, image, description, owner) => {
    return await Creature.create({name, species, skinColor, eyeColor, image, description, owner});
}

exports.findSingleCreatur = async (id) => {
    return Creature.findById(id).populate("votes").lean();
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

exports.getMyCreatures = async (ownerId) => {
    return Creature.find({owner: ownerId}).populate("owner").lean();
}

exports.addVotes = async (creatureId, userId) => {
    const creature = await Creature.findById(creatureId);
    const isExistingVote = creature.votes.some((v) => v?.toString() === userId);

    if (isExistingVote) {
        return;
    }
    creature.votes.push(userId);
    return await creature.save(); // Save the updated creature
}
