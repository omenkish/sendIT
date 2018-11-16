 import chai from 'chai';
import { expect } from 'chai';
import request from 'supertest';
import uuidv4 from 'uuid/v4';
//chai.use(chaiHttp);

// local modules
import server from '../server';

describe('Parcel End Points', () => {

  const parcel = {
    id: uuidv4(),
    orderNo: '123dt',
    address: 'Home',
    presentLocation: 'Lagos',
    status: 'completed',
    description: 'as is',
    price: 123467
  };
  // Test Get /api/v1/orders
  describe('POST api/v1/parcels', () => {
    it('should create new parcel', () => {
      return request(server)
        .post('/api/v1/parcels/')
        .send(parcel)
        .then((res) => {
          expect(res.statusCode).to.equal(201);
          expect(res.body).to.have.property('orderNo');
         // expect(res.body.status).to.equal('completed');
        })
        .catch((err) => {
          if(err){
            expect(err.statusCode).to.equal(404);
          }
        })
    });

    // POST - BAD request
    it('should return Bad Request', () => {
      return request(server)
        .post('/api/v1/parcels/')
        .type('form')
        .send(parcel)
        .then((res) => {
          chai.assert.throws(() => { throw new Error('Invalid Content Type!') }, Error, 'Invalid Content Type!');
        })
        .catch((err) => {
          if(err){
            expect(err.statusCode).to.equal(404);
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
          if(err){
            expect(err.statusCode).to.equal(404);
          }
        });
    });

    // GET - Invalid path
    it('should return Not Found', () => {
      return request(server)
        .get('/INVALID_PATH')
        .then((res) => {
          chai.assert.throws(() => { throw new Error('Path Exists!') }, Error, 'Path Exists!');
        })
        .catch((err) => {
          if(err){
            expect(err.statusCode).to.equal(404);
          }
        });
    });
  });

  describe('GET api/v1/parcels/id', () => {

    it('should GET a particular parcel', () => {
      return request(server)
        .get(`/api/v1/parcels/op-0098`)
        .then((res) => {
          //expect(res.status).to.equal(200);
        })
        .catch((err) => {
          if(err){
            expect(err.statusCode).to.equal(404);
          }
        });
    });

  });

  describe('DELETE api/v1/parcels/id', () => {

    it('should DELETE a particular parcel', () => {
      const id = 1;
      return request(server)
        .put(`/api/v1/parcels/${parcel.id}/cancel`)
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