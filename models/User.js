const mongoose = require('mongoose');
const urlPattern = require('../constants/constants');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    validate: {
      validator(v) {
        return urlPattern.test(v);
      },
      message: 'Некорректный URL',
    },
    required: true,
  },
});

module.exports = mongoose.model('user', userSchema);
