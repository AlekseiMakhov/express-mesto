const fs = require('fs');

const readFile = (path, encoding) => new Promise((resolve, reject) => {
  fs.readFile(path, encoding, (err, data) => {
    if (err) {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject({ message: 'Ошибка чтения файла' });
      return;
    }
    resolve(JSON.parse(data));
  });
});

module.exports = readFile;
