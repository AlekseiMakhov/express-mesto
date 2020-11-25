const express = require('express');
const path = require('path');
const userRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

const app = express();
const { PORT = 3000 } = process.env;

app.use(express.static(path.join(__dirname, 'public'))); // отдаем пользователю собранную страницу

app.use('/', cardsRouter); // Обработка запроса карточек
app.use('/', userRouter); // Обработка запроса пользователей

// Обработка запроса несуществующего адреса
app.use('*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT);
