/* eslint-disable no-underscore-dangle */

const mongoose = require('mongoose');

const userOneId = new mongoose.Types.ObjectId();
const userOne = {
  _id: userOneId,
  email: 'testing.dev@gmail.com',
  password: 'abcdefghi',
  firstName: 'David',
  lastName: 'Beckham'
};

module.exports = { userOne };
