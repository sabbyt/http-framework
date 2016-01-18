const fs = require('fs');

exports.writeFile = (filename) => {
  fs.writeFile(filename, '', 'utf8', (err) => {
    if (err) throw err;
    console.log('File name: ' + filename);
    return console.log('File written!');
  });
};

exports.readFile = (filename) => {
  fs.readFile(filename, (err, data) => {
    if (err) throw err;
    console.log('Read file: ' + filename);
    console.log('File read');
    return data;
  })
};
