const mongoose = require('mongoose');

// MongoDB connection URL
const dbURL = 'mongodb://localhost:27017/TestUser';

async function connectDb() {
  await mongoose.connect(dbURL);
  console.log('DB connected')
}


const userSchema = new mongoose.Schema({
  name: String,
  age: Number
})

const User = mongoose.model('User', userSchema);
const newUser = new User({
  name: "Ivan",
  age: 25
})

User.create(newUser);
console.log('User created')

const users = User.find();
console.log(users);
connectDb();
