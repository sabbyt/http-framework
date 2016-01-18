var httpframe = require(__dirname + '/../index');

httpframe.post('/', function(req, res) {
  httpframe.data(req, function(data) {
    res.write(data);
    res.end();
  });

});
httpframe.listen(3000, function() {
  console.log('server up');
});
