const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First Name is required'],
        minLength: [3, 'First name needs to be longer']
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is required'],
        minLength: [3, 'Last name needs to be longer']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email already exists'],
        minLength: [10, 'Email needs to be longer']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minLength: [4, 'Password needs to be longer']
    }
});

userSchema.virtual("repeatPassword").set(function (value) {
    if (value !== this.password) {
      throw new mongoose.MongooseError("Password missmatch!");
    }
  });

userSchema.pre('save', async function () {
    this.password = await bcrypt.hash(this.password, 10);
})

const User = new mongoose.model('User', userSchema);

module.exports = User;