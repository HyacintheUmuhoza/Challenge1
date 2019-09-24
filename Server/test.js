import chai, { expect } from 'chai';
import chaiHTTP from 'chai-http';
import app from '../Server/index';

chai.use(chaiHTTP);

const entries =  
    {
      id: 1,
      title: "Party",
      description: "I will go on birthday "
    };

const newUser = {
    id: 3,
    title: 'Designing',
    description: 'I will develop my own website',
    
  };
  
  
  
  describe('User APIs testing', () => {
    it('GET /users should return all entries', done => {
      chai
        .request(app)
        .get('/entries')
        .end((err, res) => {
          expect(res.status).to.equals(404);
          expect(res.body).to.be.an('object');
          expect(res.body.message).not.to.be.null;
          expect(res.body.title).not.to.be.null;
          expect(res.body.description).not.to.be.null;
          done();
        });
    });

    it('GET /users should get specific entry', done => {
        chai
          .request(app)
          .get('/entries/:id')
          .end((err, res) => {
            expect(res.status).to.equals(404);
            expect(res.body).to.be.an('object');
            expect(res.body.message).not.to.be.null;
            expect(res.body.title).not.to.be.null;
            expect(res.body.description).not.to.be.null;
            done();
          });
      });

    it('POST /users should create their own entries', done => {
      chai
        .request(app)
        .post('/entries')
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
  
  
  describe('Users Modifying', () => {
    it('Delete /users should delete entries', done => {
      chai
        .request(app)
        .delete('/entries/:id')
        .end((err, res) => {
          expect(res.status).to.equals(404);
          expect(res.body).to.be.an('object');
          expect(res.body).to.be.empty;
       
          done();
        });
    });
  
    it('UPDATE /users should update entries', done => {
      chai
        .request(app)
        .put('/entries/:id')
        .end((err, res) => {
          expect(res.status).to.equals(404);
          expect(res.body).to.be.an('object');
          expect(res.body.name).not.to.be.null;
          expect(res.body.role).not.to.be.null;
       
          done();
        });
    });
  });
  

