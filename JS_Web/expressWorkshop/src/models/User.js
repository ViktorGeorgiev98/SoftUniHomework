const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true, minLength: 5}
})

userSchema.pre("save", async function () {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
  });
const User = new mongoose.model('User', userSchema);

module.exports = User;