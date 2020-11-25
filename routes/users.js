const router = require('express').Router();
const path = require('path');
const readFile = require('../utils/readFile');

// Обработка запроса массива пользователей
router.get('/users', (req, res) => {
  readFile(path.join(__dirname, '..', 'data', 'users.json'), 'utf8')
    .then((data) => res.send(JSON.parse(data)))
    .catch((err) => res.status(500).send(err));
});

// Обработка запроса пользователя по id
router.get('/users/:id', (req, res) => {
  readFile(path.join(__dirname, '..', 'data', 'users.json'), 'utf8')
    .then((data) => {
      const users = JSON.parse(data);

      let foundUser = { status: 404, data: { message: 'Нет пользователя с таким id' } };

      // eslint-disable-next-line array-callback-return
      users.some((user) => {
        // eslint-disable-next-line no-unused-expressions
        user._id === req.params.id
          ? foundUser = { status: 200, data: user }
          : null;
      });
      res.status(foundUser.status).send(foundUser.data);
    })
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
