import chai from 'chai';
import { expect } from 'chai';
import request from 'supertest';

// local modules
import server from '../server';
import ParcelOrder from '../models/parcels';

const validParcel = {
  id: 5,
  placed_by: 4,
  receiver_number: '08138106482',
  weight: 12.7,
  weight_metric: 'kg',
  sender_address: 'home',
  receiver_address: 'his home',
  current_location: 'aba'
};

const signup = {
  
  firstname : 'kev',
  lastname: 'kev',
  othernames: 'kev',
  email: 'omenkish0000@gmail.com',
  phone: '09987654321',
  password: '123456y'

}

describe('ROUTES FOR PARCELS', () => {
  // let user;
  // before('add user to db and log him in before test', async () => {
  //   await request(server).post('/api/v1/auth/signup').send(signup);
  //   const login = await request(server).post('/api/v1/auth/login')
  //     .send({ email: signup.email, password: signup.password });
  //     console.log(login);
  //   user = login.body;
  //   console.log(user);
  // });

   after('Clear db after test', () => {
     ParcelOrder.clearTables();
   })

  describe('POST {when a parcel is being created}', () => {
    it('should return status code 201', () =>{
      return request(server)
        .post('/api/v1/parcels')
        .send(validParcel)
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1lQGdtYWlsLmNvbSIsImlkIjo1LCJpYXQiOjE1NDI5MDg5OTAsImV4cCI6MTU0MzA4MTc5MH0.ZfZXyqfXybCOuFo4K5IW7CvdW-_qVPw-0XS5FJHGdYA')
        .then(res => {
          expect(res.status).to.equal(201);
        })
        
    });

    it('should return status 400 on empty receiver number', () => {
      return request(server)
        .post('/api/v1/parcels')
        .send({
          id: 5,
          placed_by: 4,
          receiver_number: '',
          weight: 12.7,
          weight_metric: 'kg',
          sender_address: 'home',
          receiver_address: 'his home',
          current_location: 'aba'
        })
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1lQGdtYWlsLmNvbSIsImlkIjo1LCJpYXQiOjE1NDI5MDg5OTAsImV4cCI6MTU0MzA4MTc5MH0.ZfZXyqfXybCOuFo4K5IW7CvdW-_qVPw-0XS5FJHGdYA')
        .then(res => {
          expect(res.status).to.equal(415);
        })
    });
    it('should return status code 200 ', () => {
      return request(server)
        .post('/api/auth/signup')
        .send(signup)
        .then(res => {
          expect(res.status).to.equal(200);
        })
    });

    it('should return status code 201 ', () => {
      return request(server)
        .post('/api/auth/login')
        .send({email:signup.email, password: signup.password})
        .then(res => {
          expect(res.status).to.equal(200);
        })
    })
  })

  describe('POST route  for user', () => {
    
  })
});