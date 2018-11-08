import chai from 'chai';
import { expect } from 'chai';
import request from 'supertest';

import server from '../server';

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

    it('should return no parcel to the user, and status code 404 if the user does not exist ', () => {
      return request(server)
      .get(`/api/v1/users/${user.id + 3}/parcels`)
      .then(res => {
        expect(res.status).to.equal(404);
      })
      .catch(err => {
        
      });
    })
  })
});