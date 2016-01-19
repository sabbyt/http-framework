# babyExpress
A Simple HTTP Framework

Code Fellows 401 JS assignment by [Kenneth Suh](https://github.com/suhk) and [Sabrina Tee](https://github.com/sabbyt)

## Quick Start
Install babyExpress from [npm](https://www.npmjs.com/package/baby-express):
```
npm install baby-express
```
And require the babyExpress plugin into the top of your working file:
```javascript
const babyExpress = require('baby-express');
```
Make sure to include a call at the bottom of your file to create and listen to a server at a specified port:
```javascript
babyExpress.listen(3000, () => {
  console.log('Server up');
});
```
Then create REST calls following the sample code below:

## A Sample babyExpress File
This file will give you a taste of what babyExpress does:
```javascript
var babyExpress = require('baby-express');

babyExpress.get('/rest', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.gift(JSON.stringify({"msg": "get test"}));
});

babyExpress.post('/rest', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.gift(JSON.stringify({"msg": "post test"}));
});

babyExpress.patch('/rest', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.gift(JSON.stringify({"msg": "patch test"}));
});

babyExpress.put('/rest', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.gift(JSON.stringify({"msg": "put test"}));
});

babyExpress.delete('/rest', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.gift(JSON.stringify({"msg": "delete test"}));
});

babyExpress.listen(3000, () => {
  console.log('Server up');
});
```

## Features
### res.gift()
babyExpress combines the ```res.write()``` and ```res.end()``` http methods into one package defined as:
```javascript
res.gift('hello world');
```

### Data Handler
There is a data handler feature that collects all the data chunks and passes the completed string into a callback function:
```javascript
babyExpress.post('/', (req, res) => {
  babyExpress.data(req, (data) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.gift(data);
  });
});
```

### View Handler
There is a view handler feature that writes the data from the file to the response object:
```javascript
// Example 1:
babyExpress.get('[uri]', (req, res) => {
  babyExpress.view('[pathname]', res);
});

// Example 2:
babyExpress.get('/filePath', (req, res) => {
  babyExpress.view(__dirname + '/../public/test.txt', res);
});

```

### Content-Type Header
This feature is already built into ```baby-express.js``` but if you would like to use the Content-Type Header function that automatically detects the file's extension and inserts the completed Content-Type into the header, require this module at the top of your file:
```javascript
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
Submit an issue on [Github](https://github.com/sabbyt/http-framework/issues) or contact tyler@code-fellows.org

### License
The MIT License (MIT)

Copyright (c) 2016 [Kenneth Suh](https://github.com/suhk) and [Sabrina Tee](https://github.com/sabbyt)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
