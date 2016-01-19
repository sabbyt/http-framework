var httpframe = require(__dirname + '/../index');

httpframe.get('/rest', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.gift(JSON.stringify({'msg': 'get test'}));
});

httpframe.post('/rest', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.gift(JSON.stringify({'msg': 'post test'}));
});

httpframe.patch('/rest', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.gift(JSON.stringify({'msg': 'patch test'}));
});

httpframe.put('/rest', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.gift(JSON.stringify({'msg': 'put test'}));
});

httpframe.delete('/rest', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.gift(JSON.stringify({'msg': 'delete test'}));
});

httpframe.post('/', (req, res) => {
  httpframe.data(req, (data) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.gift(data);
  });
});

httpframe.get('/filePath', (req, res) => {
  httpframe.view(__dirname + '/../public/test.txt', res);
});

httpframe.listen(3000, () => {
  console.log('Server up');
});

module.exports = httpframe.server;
