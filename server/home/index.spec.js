const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const { server } = require('../../index');

chai.use(chaiHttp);

describe('The GET /', () => {
  it('should return HTML', (done) => {
    chai.request(server)
            .get('/')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.should.have.header('content-type', 'text/html');
                done();
            });
  });
});

describe('The root path', () => {
  it('should only accept GET requests', (done) => {
    chai.request(server)
            .post('/')
            .end((err, res) => {
                  res.should.have.status(405);
                  res.should.have.header('allow', 'GET');
                  res.body.should.deep.equal({ message: 'You can only make GET requests 📩' });
                done();
            });
  });
});