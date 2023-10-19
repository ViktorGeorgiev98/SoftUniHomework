const mongoose = require('mongoose');


const urlValidator = (url) => {
    return /^http:\/\/|^https:\/\//.test(url);
  };


  const creatureSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Name is required'],
      minLength: [2, 'Name needs to be longer'],
    },
    species: {
      type: String,
      required: [true, 'Species is required'],
      minLength: [3, 'Species needs to be longer'],
    },
    skinColor: {
      type: String,
      required: [true, 'Skin is required'],
      minLength: [3, 'Skin must be longer'],
    },
    eyeColor: {
      type: String,
      required: [true, 'Eye color is required'],
      minLength: [3, 'Eye color must be longer'],
    },
    image: {
      type: String,
      required: [true, 'Image is required'],
      validate: [urlValidator, 'Invalid URL!'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      minLength: [5, 'Description should be longer'],
      maxLength: [500, 'Description should be shorter!'],
    },
    votes: [
      {
        type: mongoose.Types.ObjectId, // The type from MongoDB
        ref: 'User', // The name of the model this references (assuming User model)
      },
    ],
    owner: {
      type: mongoose.Types.ObjectId, // The type from MongoDB
      ref: 'User', // The name of the model this references (assuming User model)
    },
  });

const Creature = new mongoose.model('Creature', creatureSchema);

module.exports = Creature;