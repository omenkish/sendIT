"use strict";

var _chai = _interopRequireWildcard(require("chai"));

var _supertest = _interopRequireDefault(require("supertest"));

var _server = _interopRequireDefault(require("../server"));

var _parcels = _interopRequireDefault(require("../models/parcels"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// local modules
var validParcel = {
  id: 5,
  placed_by: 4,
  receiver_number: '08138106482',
  weight: 12.7,
  weight_metric: 'kg',
  sender_address: 'home',
  receiver_address: 'his home',
  current_location: 'aba'
};
var signup = {
  firstname: 'kev',
  lastname: 'kev',
  othernames: 'kev',
  email: 'omenkish0000@gmail.com',
  phone: '09987654321',
  password: '123456y'
};
describe('ROUTES FOR PARCELS', function () {
  // let user;
  // before('add user to db and log him in before test', async () => {
  //   await request(server).post('/api/v1/auth/signup').send(signup);
  //   const login = await request(server).post('/api/v1/auth/login')
  //     .send({ email: signup.email, password: signup.password });
  //     console.log(login);
  //   user = login.body;
  //   console.log(user);
  // });
  after('Clear db after test', function () {
    _parcels.default.clearTables();
  });
  describe('POST {when a parcel is being created}', function () {
    it('should return status code 201', function () {
      return (0, _supertest.default)(_server.default).post('/api/v1/parcels').send(validParcel).set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1lQGdtYWlsLmNvbSIsImlkIjo1LCJpYXQiOjE1NDI5MDg5OTAsImV4cCI6MTU0MzA4MTc5MH0.ZfZXyqfXybCOuFo4K5IW7CvdW-_qVPw-0XS5FJHGdYA').then(function (res) {
        (0, _chai.expect)(res.status).to.equal(201);
      });
    });
    it('should return status 400 on empty receiver number', function () {
      return (0, _supertest.default)(_server.default).post('/api/v1/parcels').send({
        id: 5,
        placed_by: 4,
        receiver_number: '',
        weight: 12.7,
        weight_metric: 'kg',
        sender_address: 'home',
        receiver_address: 'his home',
        current_location: 'aba'
      }).set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1lQGdtYWlsLmNvbSIsImlkIjo1LCJpYXQiOjE1NDI5MDg5OTAsImV4cCI6MTU0MzA4MTc5MH0.ZfZXyqfXybCOuFo4K5IW7CvdW-_qVPw-0XS5FJHGdYA').then(function (res) {
        (0, _chai.expect)(res.status).to.equal(415);
      });
    });
  });
  describe('POST route  for user', function () {
    it('should return status code 200 ', function () {
      return (0, _supertest.default)(_server.default).post('/api/auth/signup').send(signup).then(function (res) {
        (0, _chai.expect)(res.status).to.equal(200);
      });
    });
    it('should return status code 201 ', function () {
      return (0, _supertest.default)(_server.default).post('/api/auth/login').send({
        email: signup.email,
        password: signup.password
      }).then(function (res) {
        (0, _chai.expect)(res.status).to.equal(200);
      });
    });
  });
});