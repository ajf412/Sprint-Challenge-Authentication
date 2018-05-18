const User = require('../models/userModels');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { mysecret } = require('../../config');

// ________HELPER FUNCTIONS________
const getTokenForUser = userObject => {
  return jwt.sign(userObject, mysecret, {expiresIn: '1h' });
}

const createUser = (req, res) => {
  const { username, password } = req.body;
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
    console.log(username);
    const user = new User({ username, password });
  
    user.save((err, user) => {
      if (err) return res.send(err);
  
      const token = getTokenForUser({ username: user.username });
      res.json({ token });
    });
};

module.exports = {
  createUser
};
