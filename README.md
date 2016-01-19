# babyExpress
A Simple HTTP Framework

Code Fellows 401 JS assignment by [Kenneth Suh](https://github.com/suhk) and [Sabrina Tee](https://github.com/sabbyt)

## Quick Start
Install babyExpress from npm:
```
npm install baby-express
```
And require babyExpress into the top of your working file:
```
const babyExpress = require('baby-express');
```
Make sure to include a listen call at the bottom of your file to create and listen to the server at your specified port:
```
babyExpress.listen(3000, () => {
  console.log('Server up');
});
```
Then create REST calls following the sample code below:

## A Sample babyExpress File
This file will give you a taste of what baby-express does:
```
var babyExpress = require('baby-express');

babyExpress.get('/rest', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.gift(JSON.stringify({"msg":"get test"}));
});

babyExpress.post('/rest', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.gift(JSON.stringify({"msg":"post test"}));
});

babyExpress.patch('/rest', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.gift(JSON.stringify({"msg":"patch test"}));
});

babyExpress.put('/rest', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.gift(JSON.stringify({"msg":"put test"}));
});

babyExpress.delete('/rest', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.gift(JSON.stringify({"msg":"delete test"}));
});

babyExpress.listen(3000, () => {
  console.log('server up');
});
```

## Features
### res.gift()
babyExpress combines the ```res.write()``` and ```res.end()``` http methods into one package defined as:
```
res.gift('hello world');
```

### Data handler
There is a data handler feature that collects all the data chunks and passes the completed string into a callback function:
```
babyExpress.post('/', (req, res) => {
  babyExpress.data(req, (data) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.gift(data);
  });
});
```

### View handler
There is a view handler feature that writes the data from the file to the response object:
```
// example 1:
babyExpress.get('[uri]', (req, res) => {
  babyExpress.view('[pathname]', res);
});

// example 2:
babyExpress.get('/filePath', (req, res) => {
  babyExpress.view(__dirname + '/../public/test.txt', res);
});

```

### Content-Type Header
This feature is already built into baby-express.js but if you would like to use the Content-Type Header function that automatically detects the file's extension and inserts the completed Content-Type into the header, require this module at the top of your file:
```
const babyExpress = require('baby-express');
const contentHead = babyExpress.contentHead;

fs.readFile(pathname, (err, data) => {
  if (err) throw err;
  console.log('Read file: ' + pathname);
  res.writeHead(200, contentHead(pathname));
  res.gift(data);
});
```

### Issues? Suggestions? Comments?
Contact tyler@code-fellows.org
