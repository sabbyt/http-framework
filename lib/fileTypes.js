const path = require('path');

var contentType = {
  txt: 'text/plain',
  html: 'text/html',
  dvi: 'text/x-dvi',
  xc: 'text/x-c',
  css: 'text/css',
  jpg: 'image/jpeg',
  bmp: 'image/bmp',
  png: 'image/png',
  json: 'application/json',
  pdf: 'application/pdf'
};

var fileType = module.exports = exports = (filepath) => {
  var ext = path.extname(filepath);
  return {'Content-Type': contentType[ext.slice(1)]};
};
