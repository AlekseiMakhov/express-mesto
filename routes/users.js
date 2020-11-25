const router = require('express').Router();
const users = require('../data/users.json');

router.get('/users', (req, res) => {
    res.send(users);
});

router.get('/users/:id', (req, res) => {
    let foundUser = { status: 404, data: { message: "Нет пользователя с таким id" } };
    users.some((user) => {user._id == req.params.id ? foundUser = { status: 200, data: user } : null });
    res.status(foundUser.status).send(foundUser.data);
});

module.exports = router;