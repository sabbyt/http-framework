var httpframe = require(__dirname + '/../index');

httpframe.post('/', (req, res) => {
  httpframe.data(req, (data) => {
    res.gift(data);
  });
});

httpframe.get('/filePath', (req, res) => {
  httpframe.view(__dirname + '/../public/index.html', res);
});

httpframe.listen(3000, () => {
  console.log('Server started!');
});
