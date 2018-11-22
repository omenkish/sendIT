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
  email: 'omenkish@gmail.com',

}

describe('ROUTES FOR PARCELS', () => {


  describe('POST {when a parcel is being created}', () => {
    it('should return status code 201', () =>{
      return request(server)
        .post('/api/v1/parcels')
        .send(validParcel)
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1lQGdtYWlsLmNvbSIsImlkIjo1LCJpYXQiOjE1NDI5MDg5OTAsImV4cCI6MTU0MzA4MTc5MH0.ZfZXyqfXybCOuFo4K5IW7CvdW-_qVPw-0XS5FJHGdYA')
        .then(res => {
          expect(res.status).to.equal(201);
        })
        
    })
  })
});