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
});