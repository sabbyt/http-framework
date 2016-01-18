var server = require(__dirname + '/temp-server');
var chai = require('chai');
var chaiHTTP = require('chai-http');
chai.use(chaiHTTP);
var expect = chai.expect;
var request = chai.request;
var origin = 'localhost:3000';

describe('REST functionality', function() {
  it('should get', (done) => {
    request(origin)
      .get('/rest')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.body.msg).to.eql('get test');
        done();
      });
  });

  it('should post', (done) => {
    request(origin)
      .post('/rest')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.body.msg).to.eql('post test');
        done();
      });
  });

  it('should put', (done) => {
    request(origin)
      .put('/rest')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.body.msg).to.eql('put test');
        done();
      });
  });

  it('should patch', (done) => {
    request(origin)
      .patch('/rest')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.body.msg).to.eql('patch test');
        done();
      });
  });

  it('should delete', (done) => {
    request(origin)
      .delete('/rest')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.body.msg).to.eql('delete test');
        done();
      });
  });
});

describe('our http-framework test', () => {
  it('should get and read external files', (done) => {
    request(origin)
      .get('/filePath')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.text).to.eql('hello world\r\n');
        done();
      });
  });

  it('should post request data', (done) => {
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
