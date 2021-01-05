const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

const app = express();
const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(express.json());
app.use((req, res, next) => {
  req.user = {
    _id: '5ff4ba6a06cad00ec461d430',
  };
  next();
});
app.use('/', userRouter); // Обработка запроса пользователей
app.use('/', cardsRouter); // Обработка запроса карточек

// Обработка запроса несуществующего адреса
app.use('*', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT);
