var httpframe = require(__dirname + '/../index');

httpframe.post('/', (req, res) => {
  httpframe.data(req, (data) => {
    res.write(data);
    res.end();
  });
});

httpframe.get('/filePath', (req, res) => {
  httpframe.view(__dirname + '/../public/index.html', res);
});

httpframe.listen(3000, () => {
  console.log('server up');
});
