/* eslint-disable no-underscore-dangle */

const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = async req => {
  if (process.env.MODE !== 'test') {
    const token = req.headers.authorization || '';
    const decoded = jwt.verify(token, process.env.APP_SECRET);
    const user = await User.findOne({
      _id: decoded._id,
      'tokens.token': token
    });

    if (!user) {
      throw new Error('Please authenticate');
    }

    return user;
  }
  return req.user;
};

module.exports = auth;
