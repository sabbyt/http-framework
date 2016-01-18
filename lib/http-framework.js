var http = require('http');
var Router = require(__dirname + '/router')
const fs = require('fs');
const contentHead = require(__dirname + '/fileTypes');

var exportObj = module.exports = exports = {};
var router = new Router();

exportObj.get = (url, callback) => {
  router.get(url, callback);
};

exportObj.post = (url, callback) => {
  router.post(url, callback);
};

exportObj.put = (url, callback) => {
  router.put(url, callback);
};

exportObj.patch = (url, callback) => {
  router.patch(url, callback);
};

exportObj.delete = (url, callback) => {
  router.delete(url, callback);
};

exportObj.data = (req, callback) => {
  var resString = '';
  req.on('data', (chunk) => {
    resString += chunk.toString();
  });
  req.on('end', () => {
    callback(resString);
  });
};

exportObj.view = (pathname, res) => {
  fs.readFile(pathname, (err, data) => {
    if (err) throw err;
    console.log('Read file: ' + pathname);
    res.writeHead(200, contentHead(pathname));
    res.gift(data);
  });
};

exportObj.listen = (port, callback) => {
  callback = callback || function() {};
  exportObj.server = http.createServer(router.route());
  exportObj.server.listen(port, callback);
};
