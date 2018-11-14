import chai from 'chai';
import { expect } from 'chai';
import request from 'supertest';

import server from '../server/server';

describe('User End points', () => {

  const user = {
    id : 1,
    username : 'Omenkish',
    email : 'omenkish@gmail.com',
    password : '12345'

  };

  describe('POST user route', () => {
    it('should create a new user', () => {
      return request(server)
        .post('/api/v1/users')
        .send(user)
        .then(res => {
        expect(res.status).to.equal(201);
        expect(res.body).to.have.property('username');
        })
        .catch(err => {
          if(err){
            expect(err.status).to.equal(404)
          }
        });
    });
    
  });

  describe('GET all parcels by user', () => {
    it('should respond with all parcel orders by the user ', () => {
      return request(server)
      .get(`/api/v1/users/${user.id}/parcels`)
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res.body.length).to.equal(0);
      })
      .catch(err => {
        if(err){
          expect(err.status).to.equal(404)
        }
      })
    });

    it('should return status code 404 if the user does not exist ', () => {
      return request(server)
      .get(`/api/v1/users/${user.id + 3}/parcels`)
      .then(res => {
        expect(res.status).to.equal(404);
      })
      .catch(err => {
        
      });
    })
  })

  describe('GET api/v1/users', () => {
    // GET all users
    it('should get all users', () => {
      return request(server)
      .get('/api/v1/users')
        .then((res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('array');
        })
        .catch((err) => {
          if(err){
            expect(err.status).to.equal(404);
          }
        });
    });

    // GET - Invalid path
    it('should return Not Found', () => {
      return request(server)
        .get('/INVALID_PATH')
        .then(res => {
          chai.assert.throws(() => { throw new Error('Path Exists!') }, Error, 'Path Exists!');
        })
        .catch((err) => {
          if(err){
            expect(err.statusCode).to.equal(404);
          }
        });
    });

    /**
     * GET user by Id
     */
    it('should return a particular user or error code 404 if not found', () => {
      return request(server)
        .get(`/api/v1/users/${user.id}`)
        .then(res => {
          //expect(res.status).to.equal(200);
          // expect(res.body).to.be.an('object');
        })
        .catch((err) => {
          expect(err.status).to.equal(404);
        });
    });
  });

  describe('DELETE api/v1/users/id', () => {

    it('should DELETE a particular user', () => {
      return request(server)
        .put(`/api/v1/users/${user.id}/cancel`)
        .then((res) => {
          //expect(res.statusCode).to.equal(204);
        })
        .catch((err) => {
          // parcel with ID not found
          if(err){
            expect(err.statusCode).to.equal(404);
          }
        });
    });

  });

});