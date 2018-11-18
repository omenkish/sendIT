import chai from 'chai';
import { expect } from 'chai';
import request from 'supertest';
import moment from 'moment';

// local modules
import server from '../server';
import ParcelOrder from '../models/parcel';

describe('Parcel End Points', () => {
  const parcelObj = new ParcelOrder();
  const validParcel = new ParcelOrder().parcelOrders[0];
  const currTime = parcelObj.currentTime();
  
  // Test Get /api/v1/orders
  describe('POST api/v1/parcels', () => {
    it('should create new parcel',  () => {
      return request(server)
        .post('/api/v1/parcels/')
        .send(validParcel)
        .then(res => {
          expect(res.status).to.equal(201);
          expect(res.body).to.have.property('orderNo');
          expect(res.body.orderStatus).to.equal('Active');
        })
    });

    // it('should return http code 400 if destination is empty', function () {
    //   return request(server)
    //     .post('api/v1/parcels')
    //     .send({
    //       id: 12345,
    //       userId: 1,
    //       orderNo: validParcel.orderNo,
    //       destination: 'Badagry',
    //       presentLocation: validParcel.presentLocation,
    //       deliveryStatus: validParcel.deliveryStatus,
    //       orderStatus: validParcel.orderStatus,
    //       price: validParcel.price,
    //       description: validParcel.description,
    //       createdDate: validParcel.createdDate,
    //       modifiedDate: validParcel.modifiedDate
    //     })
    //     .then(res => {
    //       expect(res.statusCode).to.equal(400);
    //     })
    // });

    // POST - BAD request
    it('should return Bad Request', () => {
      return request(server)
        .post('/api/v1/parcels/iuu8yg')
        .type('form')
        .send(validParcel)
        .then((res) => {
          expect(res.statusCode).to.equal(404);
        })
        .catch((err) => {
          if(err){
            expect(err).to.have.property('message');
          }
        });
    });

  });

  // Test Get /api/v1/orders
  describe('GET api/v1/parcels', () => {
    // GET all parcels
    it('should get all parcels', () => {
      return request(server)
        .get('/api/v1/parcels/')
        .then((res) => {
          expect(res.status).to.equal(200);
        })
        .catch((err) => {
          expect(err).to.have.property('statusCode');
        });
    });

    // GET - Invalid path
    it('should return Not Found', () => {
      return request(server)
        .get('/api/v1/parcels/ooiytrt33')
        .then((res) => {
          expect(res.statusCode).to.equal(404);
        })
    });
  });

  describe('GET api/v1/parcels/id', () => {

    it('should GET a particular parcel', () => {
      return request(server)
        .get(`/api/v1/parcels/${validParcel.id}`)
        .then((res) => {
          expect(res.status).to.equal(200);
        })
        .catch((err) => {
          expect(err).to.have.property('statusCode');
        });
    });

  });

  describe('DELETE api/v1/parcels/id', () => {

    it('should DELETE a particular parcel', () => {
      return request(server)
        .put(`/api/v1/parcels/${validParcel.id}/cancel`)
        .then(res => {
          expect(res.statusCode).to.equal(204);
          expect(res.body.deliveryStatus).to.equal('Cancelled');
        })
        .catch(err => {
          expect(err).to.have.property('message');
        })
    });

  });

  describe('UPDATE /api/v1/parcels', () => {
    it('Should return http code of 201', () => {
      return request(server)
        .put(`/api/v1/parcels/${validParcel.id}`)
        .send({
          destination: 'PortHarcourt',
          orderStatus: 'Active',
          price: 2000,
          description: 'Black leather belt',
          modifiedDate: currTime
        })
        .then(res => {
          expect(res.statusCode).to.equal(201);
          expect(res.body.destination).to.equal('PortHarcourt');
        })
    })
  })

});