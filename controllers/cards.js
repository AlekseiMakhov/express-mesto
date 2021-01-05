const Card = require('../models/card');

// создание карточки
module.exports.createCard = (req, res) => {
  const { name, link } = req.body;
  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Ошибка добавления карточки' });
      }
    });
};

// запрос всех карточек
module.exports.getCards = (req, res) => Card.find({})
  .populate(['owner', 'likes'])
  .then((card) => res.send({ data: card }))
  .catch((err) => {
    if (err.name === 'CastError') {
      res.status(500).send({ message: 'Ошибка запроса карточек' });
    }
  });

// удаление карточки
module.exports.deleteCard = (req, res) => Card.findByIdAndRemove(req.params.cardId)
  .then(() => res.send({ message: 'Карточка удалена' }))
  .catch(() => res.status(500).send({ message: 'Такая удаления карточки' }));

// лайк
module.exports.likeCard = (req, res) => Card.findByIdAndUpdate(
  req.params.cardId,
  { $addToSet: { likes: req.user._id } },
  { new: true },
)
  .populate(['owner', 'likes'])
  .then((card) => res.send({ data: card }))
  .catch((err) => {
    if (err.name === 'CastError') {
      res.status(500).send({ message: 'Что-то пошло не так' });
    }
  });

// дизлайк
module.exports.dislikeCard = (req, res) => Card.findByIdAndUpdate(
  req.params.cardId,
  { $pull: { likes: req.user._id } },
  { new: true },
)
  .populate(['owner', 'likes'])
  .then((card) => res.send({ data: card }))
  .catch((err) => {
    if (err.name === 'CastError') {
      res.status(500).send({ message: 'Что-то пошло не так' });
    }
  });
