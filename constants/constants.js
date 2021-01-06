// регулярное выражение для валидации URL
const urlPattern = new RegExp('^(https?:\\/\\/)?(www\\.)?' // протокол
    + '(([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}' // доменное имя
    + '(\\/[a-z0-9#$:!@[]();&%_.~+=-?]*)*', 'i'); // путь
module.exports = urlPattern;
