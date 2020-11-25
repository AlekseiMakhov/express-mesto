const router = require('express').Router();
const path = require('path');
const readFile = require('../utils/readFile');

// Обработка запроса массива карточек
router.get('/cards', (req, res) => {
  readFile(path.join(__dirname, '..', 'data', 'cards.json'), 'utf8')
    .then((data) => res.send(JSON.parse(data)))
    .catch((err) => res.status(404).send(err));
});

module.exports = router;
