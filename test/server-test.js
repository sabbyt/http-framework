var server = require(__dirname + '/temp-server');
var contentHead = require(__dirname + '/../lib/fileTypes');
var chai = require('chai');
var chaiHTTP = require('chai-http');

chai.use(chaiHTTP);
var expect = chai.expect;
var request = chai.request;
var origin = 'localhost:3000';

describe('the REST functionality of the server', function() {
  it('should GET', (done) => {
    request(origin)
      .get('/rest')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.body.msg).to.eql('get test');
        done();
      });
  });

  it('should POST', (done) => {
    request(origin)
      .post('/rest')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.body.msg).to.eql('post test');
        done();
      });
  });

  it('should PUT', (done) => {
    request(origin)
      .put('/rest')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.body.msg).to.eql('put test');
        done();
      });
  });

  it('should PATCH', (done) => {
    request(origin)
      .patch('/rest')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.body.msg).to.eql('patch test');
        done();
      });
  });

  it('should DELETE', (done) => {
    request(origin)
      .delete('/rest')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.body.msg).to.eql('delete test');
        done();
      });
  });

  it('should respond a 404 error to GET requests at unknown routes', (done) => {
    request(origin)
      .get('/doesnotexist')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res).to.have.status(404);
        expect(res.body.msg).to.eql('Page not found');
        done();
      });
  });
});

describe('our baby-express test', () => {
  after(() => {
    server.close();
  });

  it('should GET and read external files with the exportObj.view function', (done) => {
    request(origin)
      .get('/filePath')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.text).to.eql('hello world\n');
        done();
      });
  });

  it('should POST request data with the exportObj.data function', (done) => {
    request(origin)
      .post('/')
      .send('yolo')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.text).to.eql('yolo');
        done();
      });
  });
});

describe('reading file types', () => {
  it('should match the specified extension name', () => {
    expect(contentHead('/index.html')).to.eql({'Content-Type': 'text/html'});
    expect(contentHead('/index.json')).to.eql({'Content-Type': 'application/json'});
  });
});
