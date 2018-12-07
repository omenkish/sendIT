import chai from 'chai';
import { expect } from 'chai';
import request from 'supertest';


// local modules
import server from '../server';
import ParcelOrder from '../models/parcels';

const validParcel = {

  placed_by: 1,
  receiver_number: '08138106482',
  description: 'Sample parcel',
  weight: 12.7,
  weight_metric: 'kg',
  sender_address: 'home',
  receiver_address: 'his home',
  current_location: 'aba',
  zip: 111222,
  state: 'my home'
};

const signup = {

  firstname : 'kev',
  lastname: 'kev',
  othernames: 'kev',
  email: 'omenkish0000@gmail.com',
  phone: '09987654321',
  password: '123456y',
  is_admin: true

};
const signup1 = {

  firstname : 'kev',
  lastname: 'kev',
  othernames: 'kev',
  email: 'omenkish0@gmail.com',
  phone: '09987654321',
  password: '123456',
}

describe('ROUTES FOR PARCELS', () => {
  let user;
  before('add user to db and log him in before test', async () => {
    await ParcelOrder.createUsersTable();
    await request(server).post('/api/v1/auth/signup').send(signup);
    const login = await request(server).post('/api/v1/auth/login')
      .send({ email: signup.email, password: signup.password });
    user = login.body;
    
    ParcelOrder.createParcelsTable();
    

  });
  after('Clear tables', ()=>{
     ParcelOrder.dropParcelsTable();  
  })

 describe('POST route to create Parcel', () => {
      it('should return status code 201', () =>{
        return request(server)
          .post('/api/v1/parcels')
          .set('Authorization', `Bearer ${user.token}`)
          .send(validParcel)
          
          .then(res => {
            expect(res.status).to.equal(201);
          })  
      });

      it('should return status 400 on empty receiver number', () => {
        return request(server)
          .post('/api/v1/parcels')
          .set('Authorization', `Bearer ${user.token}`)
          .send({
            placed_by: 1,
            receiver_number: '',
            description: 'Sample parcel',
            weight: 12.7,
            weight_metric: 'kg',
            sender_address: 'home',
            receiver_address: 'his home',
            current_location: 'aba',
            zip: 111222,
            state: 'my home'
          })
        
      });
  
  });
      
  describe('GET routes to fetch parcel(s)', () => {
    const id = 1;
    it('should return http code 200',() => {
      return request(server)
      .get('/api/v1/parcels')
      .set('Authorization', `Bearer ${user.token}`)
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res.body.data).to.be.an('array');
      })
    });

    it('should fetch a particular parcel and return http code 200',() => {
      return request(server)
      .get(`/api/v1/parcels/${id}`)
      .set('Authorization', `Bearer ${user.token}`)
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res.body.data).to.be.an('object');
      
      })
    });

    it('should return http code 401 if no token is provided',() => {
      return request(server)
      .get(`/api/v1/parcels/${id}`)
      .then(res => {
        expect(res.status).to.equal(401);
      
      })
    });

    it('should return http code 404 if id does not exist',() => {
      return request(server)
      .get(`/api/v1/parcels/${id + 3}`)
      .set('Authorization', `Bearer ${user.token}`)
      .then(res => {
        expect(res.status).to.equal(404);
      
      })
    });
    it('should return http code 400 on invalid id',() => {
      return request(server)
      .get(`/api/v1/parcels/wert`)
      .set('Authorization', `Bearer ${user.token}`)
      .then(res => {
        expect(res.status).to.equal(400);
      
      })
    });
      
   })

   describe('GET routes to fetch user(s)', () => {
    it('should fetch all users and return status code 200 ', () => {
      return request(server)
        .get('/api/v1/users')
        .set('Authorization', `Bearer ${user.token}`)
        .then(res => {
          expect(res.status).to.equal(200);
        })
      
    });

    it('should fetch a user and return status code 200 ', () => {
      const id = 1;
      return request(server)
        .get(`/api/v1/users/${id}`)
        .set('Authorization', `Bearer ${user.token}`)
        .then(res => {
          expect(res.status).to.equal(200);
        })
      
    });

    it('should return status code 404 if user is not found ', () => {
      const id = 2;
      return request(server)
        .get(`/api/v1/users/${id + 1}`)
        .set('Authorization', `Bearer ${user.token}`)
        .then(res => {
          expect(res.status).to.equal(404);
        })
      
    });

    it('should return status code 400 on invalid input ', () => {
      const id = 2;
      return request(server)
        .get(`/api/v1/users/eeee`)
        .set('Authorization', `Bearer ${user.token}`)
        .then(res => {
          expect(res.status).to.equal(400);
        })
      
    });

    it('should fetch all user parcels ', () => {
      return request(server)
        .get('/api/v1/users/parcels')
        .set('Authorization', `Bearer ${user.token}`)
        .then(res => {
          expect(res.status).to.equal(200);
        })
      
    });

    it('should make user an admin ', () => {
      return request(server)
        .get(`/api/v1/users/${user.data.id}/createadmin`)
        .set('Authorization', `Bearer ${user.token}`)
        .then(res => {
          expect(res.status).to.equal(201);
        })
      
    });
    it('should http code 400 on invalid token ', () => {
      return request(server)
        .get(`/api/v1/users/${user.data.id}/createadmin`)
        .set('Authorization', `Bearer iooo`)
        .then(res => {
          expect(res.status).to.equal(400);
        })
      
    });

    it('should return http code 404 if id doesnt exist ', () => {
      return request(server)
        .get(`/api/v1/users/${user.data.id + 1}/createadmin`)
        .set('Authorization', `Bearer ${user.token}`)
        .then(res => {
          expect(res.status).to.equal(404);
        })
      
    });

    it('should return http code 401 if no token is provided ', () => {
      return request(server)
        .get(`/api/v1/users/${user.data.id}/createadmin`)
        .then(res => {
          expect(res.status).to.equal(401);
        })
      
    });

   
  })

  describe('PUT routes to modify parcels', () => {
    const id = 1;
    it('should cancel an order', () => {
      return request(server)
      .put(`/api/v1/parcels/${id}/cancel`)
        .set('Authorization', `Bearer ${user.token}`)
        .then(res => {
          expect(res.status).to.equal(200);
        })
    });

    it('should return status code 404 if order is not found', () => {
      return request(server)
      .put(`/api/v1/parcels/${id + 1}/cancel`)
        .set('Authorization', `Bearer ${user.token}`)
        .then(res => {
          expect(res.status).to.equal(404);
        })
    });

    it('should return status code 400 on invalid id', () => {
      return request(server)
      .put('/api/v1/parcels/uuyy/cancel')
        .set('Authorization', `Bearer ${user.token}`)
        .then(res => {
          expect(res.status).to.equal(400);
        })
    });
    it('should return status code 400 on invalid token', () => {
      return request(server)
      .put(`/api/v1/parcels/${id}/cancel`)
        .set('Authorization', `Bearer ppoi8`)
        .then(res => {
          expect(res.status).to.equal(400);
        })
    });

    it('should return status code 401 if token is not provided', () => {
      return request(server)
      .put(`/api/v1/parcels/${id}/cancel`)
        .then(res => {
          expect(res.status).to.equal(401);
        })
    });
    it('should update location of an order', () => {
      return request(server)
      .put(`/api/v1/parcels/${id}/location`)
        .set('Authorization', `Bearer ${user.token}`)
        .send({
          current_location:'PortHarcourt'
        })
        .then(res => {
          expect(res.status).to.equal(200);
          expect(res.body.message).to.contain('Location updated successfully');
        })
    });

    it('should return status code 404 if order does not exist', () => {
      return request(server)
      .put(`/api/v1/parcels/${id+1}/location`)
        .set('Authorization', `Bearer ${user.token}`)
        .send({
          current_location:'PortHarcourt'
        })
        .then(res => {
          expect(res.status).to.equal(404);
          expect(res.body.message).to.contain('Order not found');
        })
    });

    it('should return status code 401 if token is not provided', () => {
      return request(server)
      .put(`/api/v1/parcels/${id}/location`)
      .send({
        current_location:'PortHarcourt'
      })
      .then(res => {
        expect(res.status).to.equal(401);
        expect(res.body.message).to.contain('You do not have access to this page. Provide a valid token');
      })
    });
    it('should return status code 200 on successful update', () => {
      return request(server)
      .put(`/api/v1/parcels/${id}/destination`)
        .set('Authorization', `Bearer ${user.token}`)
        .send({
          receiver_address:'PortHarcourt',
          zip: 3334444,
          state: 'Rivers State'
        })
        .then(res => {
          expect(res.status).to.equal(200);
          expect(res.body.message).to.contain('destination updated successfully');
        })
    });

    it('should return status code 404 if order does not exist', () => {
      return request(server)
      .put(`/api/v1/parcels/${id + 1}/destination`)
        .set('Authorization', `Bearer ${user.token}`)
        .send({
          receiver_address:'PortHarcourt',
          zip: 3334444,
          state: 'Rivers State'
        })
        .then(res => {
          expect(res.status).to.equal(404);
          
        })
    });

    
    it('should return status code 401 if no token is provided', () => {
      return request(server)
      .put(`/api/v1/parcels/${id}/destination`)
        .send({
          receiver_address:'PortHarcourt',
          zip: 3334444,
          state: 'Rivers State'
        })
        .then(res => {
          expect(res.status).to.equal(401);
          
        })
    });

    it('should return status code 400 if order is cancelled', () => {
      return request(server)
      .put(`/api/v1/parcels/${id}/deliver`)
        .set('Authorization', `Bearer ${user.token}`)
        .then(res => {
          expect(res.status).to.equal(400);
          
        })
    });

    it('should return status code 404 if order is not found', () => {
      return request(server)
      .put(`/api/v1/parcels/${id + 1}/deliver`)
        .set('Authorization', `Bearer ${user.token}`)
        .then(res => {
          expect(res.status).to.equal(404);
          
        })
    });

    it('should return status code 401 if token is not provided', () => {
      return request(server)
      .put(`/api/v1/parcels/${id}/deliver`)
        .then(res => {
          expect(res.status).to.equal(401);
          
        })
    });

    it('should return status code 400 if id is not a number', () => {
      return request(server)
      .put(`/api/v1/parcels/eert/deliver`)
        .set('Authorization', `Bearer ${user.token}`)
        .then(res => {
          expect(res.status).to.equal(400);          
        })
    });
  })

  describe('GET the home route', () => {
    it('should return status code 200', () => {
      return request(server)
      .get('/')
      .then(res => {
        expect(res.status).to.equal(200);
      })
    })
  })


});