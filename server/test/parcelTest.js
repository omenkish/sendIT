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
        .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9tZW5raXNoMTIzQGdtYWlsLmNvbSIsImlkIjo0LCJpYXQiOjE1NDI4NDM5MjcsImV4cCI6MTU0MzAxNjcyN30.S8AuF2RzVxjV8-4bCQfwB0WUDxjokmS_nq7nIWjWW-M')
        .then(res => {
          expect(res.status).to.equal(201);
        })
        .catch(err => {
          console.log('=================> Error', err);
        })
    })
  })
});