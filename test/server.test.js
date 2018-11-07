import chai from 'chai';
import chaiHttp from 'chai-http';
import { expect } from 'chai';
chai.use(chaiHttp);

// local modules
import server from '../server';

describe('Parcel End Points', () => {
  before(() => {

  });

  after(() => {
  });

  const data = {
    orderNo: '123dt',
    address: 'Home',
    presentLocation: 'Lagos',
    status: 'completed',
    price: 123467
  };
  // Test Get /api/v1/orders
  describe('POST api/v1/parcels', () => {
    it('should create new parcel', () => {
      return chai.request(server)
        .post('/api/v1/parcels')
        .send(data)
        .then((res) => {
          expect(res.status).to.equal(201);
          expect(res.body).to.have.property('orderNo');
        })
        .catch((err) => {
          expect(err).to.have.status(404);
        })
    });

    // POST - BAD request
    it('should return Bad Request', () => {
      return chai.request(server)
        .post('/api/v1/parcels')
        .type('form')
        .send(data)
        .then((res) => {
          chai.assert.throws(() => { throw new Error('Invalid Content Type!') }, Error, 'Invalid Content Type!');
        })
        .catch((err) => {
          expect(err).to.have.status(404);
        });
    });

  });

  

});