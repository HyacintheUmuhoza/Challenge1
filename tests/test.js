/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import chai, { expect } from 'chai';
import chaiHTTP from 'chai-http';
import app from '../Server/index';


chai.use(chaiHTTP);

const newUser = {
    title: 'Designing',
    description: 'I will develop my own website',
    
  };
  
describe('User APIs testing', () => {
    it('GET /users should return all entries', (done) => {
      chai
        .request(app)
        .get('/api/v1/entries')
        .end((err, res) => {
          expect(res.status).to.equals(200);
          expect(res.body).to.be.an('object');
          done();
        });
    });

    it('GET /users should get specific entry', (done) => {
        chai
          .request(app)
          .get('/api/v1/entries/1')
          .end((err, res) => {
            expect(res.status).to.equals(200);
            expect(res.body).to.be.an('object');
            
            done();
          });
      });
      // it('GET /users should not get a specific entry', done => {
      //   chai
      //     .request(app)
      //     .get('/api/v1/entries/7')
      //     .end((err, res) => {
      //       expect(res.status).to.equals(404);
      //       expect(res.body).to.be.an('object');
      //       done();
      //     });
      // })

    it('POST /users should create their own entries', (done) => {
      chai
        .request(app)
        .post('/api/v1/entries')
        .send(newUser)
        .end((err, res) => {
          expect(res.status).to.equals(201);
          expect(res.body).to.be.an('object');
          expect(res.body.title).not.to.be.null;
          expect(res.body.description).not.to.be.null;
          done();
        });
    });
  });
  
  
  describe('Users Modifying', () => {
    it('Delete /users should delete entries', (done) => {
      chai
        .request(app)
        .delete('/api/v1/entries/1')
        .end((err, res) => {
          expect(res.status).to.equals(200);
          expect(res.body).to.be.an('object');
          done();
        });
    });
  
    it('UPDATE /users should update entries', (done) => {
      chai
        .request(app)
        .put('/api/v1/entries/1')
        .send(newUser)
        .end((err, res) => {
          expect(res.status).to.equals(404);
          expect(res.body).to.be.an('object');
          expect(res.body.title).not.to.be.null;
          expect(res.body.description).not.to.be.null;
       
          done();
        });
    });
  });
  

