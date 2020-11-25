const fs = require('fs');

const readFile = function (path, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, encoding, (err, data) => {
            if (err) {
                reject({ message: 'Ошибка чтения файла' });
                return;
            };
            resolve(data);
        });
    });
};

module.exports = readFile;