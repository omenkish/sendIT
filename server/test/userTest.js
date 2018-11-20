import { expect } from 'chai';
import request from 'supertest';

import server from '../server';
import User from '../models/user';
const userObj = new User();
const validUser = userObj.users[0];


describe('User End points', () => {  
console.log(validUser);
  describe('POST user route', () => {
    it('should create a new user', () => {
      return request(server)
        .post('/api/v1/users')
        .send(validUser)
        .then(res => {
          expect(res.status).to.equal(201);
          expect(res.body).to.have.property('username');
        })
        
    });
    
  });

  describe('GET all parcels by user', () => {
    it('should respond with all parcel orders by the user ', () => {
      return request(server)
      .get(`/api/v1/users/${validUser.id}/parcels`)
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res.body.length).to.equal(1);
      })
      
    });
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
    });

    // GET - Invalid path
    it('should return Not Found', () => {
      return request(server)
        .get('/api/v1/oiuygbnjuh')
        .then(res => {
          expect(res.statusCode).to.equal(404);
        })
    });

    /**
     * GET user by Id
     */
    it('should return a particular user', () => {
      return request(server)
        .get(`/api/v1/users/${validUser.id}`)
        .then(res => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
        })
    });
  });

  describe('DELETE api/v1/users/id', () => {

    it('should DELETE a particular user', () => {
      return request(server)
        .put(`/api/v1/users/${validUser.id}/cancel`)
        .then(res => {
          expect(res.statusCode).to.equal(204);
        })
        
    });

    it('should return 404 on invalid ID', () => {
      return request(server)
        .put(`/api/v1/users/${validUser.username}/cancel`)
        .then(res => {

        })
    });

  });

  describe('UPDATE api/v1/users/id', () => {

    // it('should Update a particular user', () => {
    //   return request(server)
    //     .put(`/api/v1/users/${validUser.id}`)
    //     .send({
    //       id: 2,
    //       username: 'Rukus',
    //       email: 'omenkish@gmail.com',
    //       password: 'pass'
    //     })
    //     .then(res => {
    //       console.log(`'===================', ${res.body}`)
    //       expect(res.statusCode).to.equal(200);
    //     })
        
    // });

    it('should return 404 on invalid ID', () => {
      return request(server)
        .put(`/api/v1/users/poiuhjk`)
        .then(res => {
          expect(res.statusCode).to.equal(404);
        })
        
    });
  });

});