require('dotenv').config()
const mongoose = require('mongoose')

try {
    mongoose.connect(process.env.DB).then(console.log('Connected to mongoDB'));
  } catch (error) {
    console.log(error, "Failed to connect to mongoDB. :(")
}
