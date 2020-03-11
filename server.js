const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const UserSchema = require('./schemas/UserSchema');
const cors = require('cors');

app.use(cors());
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.post('/add_user/:firstName/:lastName', (req, res) => {
  const { firstName, lastName } = req.params;
  const User = mongoose.model('UserSchema', UserSchema, 'UserSchema');
  const userSchema = new User({ firstName, lastName });
  console.log({ firstName, lastName, userSchema });
  // save model to database
  userSchema.save((err, userSchema) => {
    if (err) return res.send({ err }).status(400);
    console.log({ userSchema, err });
    res.send({ userSchema }).status(200);
  });
});

// For Mongo
require('dotenv').config();
const mongoose = require('mongoose');

try {
  mongoose.connect(process.env.DB).then(console.log('Connected to mongoDB'));
} catch (error) {
  console.log(error, 'Failed to connect to mongoDB. :(');
}
