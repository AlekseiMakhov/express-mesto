const User = require('../models/User');

// добавление пользователя
module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Переданы некорректные данные' });
      }
    });
};

// запрос всех пользователей
module.exports.getUsers = (req, res) => User.find({})
  .then((user) => res.send({ data: user }))
  .catch((err) => {
    if (err.name === 'CastError') {
      res.status(400).send({ message: 'Ошибка запроса пользователей' });
    }
  });

// запрос пользователя по id
module.exports.getUser = (req, res) => User.findById(req.params.userId)
  .orFail(new Error('MyError'))
  .then((user) => res.send({ data: user }))
  .catch((err) => {
    if (err.name === 'CastError') {
      res.status(400).send({ message: 'Переданы некорректные данные' });
      return;
    }
    if (err.message === 'MyError') {
      res.status(404).send({ message: 'Такого пользователя не существует' });
    } else {
      res.status(500).send({ message: 'Ошибка сервера' });
    }
  });

// обновление данных пользователя
module.exports.updateUser = (req, res) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.user._id, { name, about }, { new: true })
    .orFail(new Error('MyError'))
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.message === 'MyError') {
        res.status(404).send({ message: 'Такого пользователя не существует' });
        return;
      }
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Переданы некорректные данные' });
      }
    });
};

// обновление аватара
module.exports.updateAvatar = (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id, { avatar }, { new: true, runValidators: true })
    .orFail(new Error('MyError'))
    .then((user) => res.send({ data: user }))
    .catch((err) => {
      if (err.message === 'MyError') {
        res.status(404).send({ message: 'Такого пользователя не существует' });
        return;
      }
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Переданы некорректные данные' });
      }
    });
};
