var httpframe = require(__dirname + '/../index');

httpframe.get('/', function(req, res) {
  res.write('hello');
  res.end();
});
httpframe.listen(3000, function() {
  console.log('server up');
});
