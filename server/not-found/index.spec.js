const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const { server } = require('../../index');

chai.use(chaiHttp);

describe('The 404 page not found', () => {
  it('should return a 404 response when page not found', (done) => {
    chai.request(server)
            .get('/random-url')
            .end((err, res) => {
                  res.should.have.status(404);
                  res.body.should.deep.equal({ message: 'You are in the wrong place buddy!' });
                done();
            });
  });
});