const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First Name is required'],
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
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
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