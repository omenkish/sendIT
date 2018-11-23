"use strict";

var _chai = _interopRequireWildcard(require("chai"));

var _supertest = _interopRequireDefault(require("supertest"));

var _server = _interopRequireDefault(require("../server"));

var _parcels = _interopRequireDefault(require("../models/parcels"));

var _http = require("http");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var validParcel = {
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
  var user;
  before('add user to db and log him in before test',
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var login;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _supertest.default)(_server.default).post('/api/v1/auth/signup').send(signup);

          case 2:
            _context.next = 4;
            return (0, _supertest.default)(_server.default).post('/api/v1/auth/login').send({
              email: signup.email,
              password: signup.password
            });

          case 4:
            login = _context.sent;
            user = login.body;

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  })));
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
    it('should return status 400 on empty receiver weight', function () {
      return (0, _supertest.default)(_server.default).post('/api/v1/parcels').send({
        id: 5,
        placed_by: 4,
        receiver_number: '09876543',
        weight: '',
        weight_metric: 'kg',
        sender_address: 'home',
        receiver_address: 'his home',
        current_location: 'aba'
      }).set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1lQGdtYWlsLmNvbSIsImlkIjo1LCJpYXQiOjE1NDI5MDg5OTAsImV4cCI6MTU0MzA4MTc5MH0.ZfZXyqfXybCOuFo4K5IW7CvdW-_qVPw-0XS5FJHGdYA').then(function (res) {
        (0, _chai.expect)(res.status).to.equal(415);
      });
    });
    it('should return status 400 on empty weight metric', function () {
      return (0, _supertest.default)(_server.default).post('/api/v1/parcels').send({
        id: 5,
        placed_by: 4,
        receiver_number: '08138106482',
        weight: 12.7,
        weight_metric: '',
        sender_address: 'home',
        receiver_address: 'his home',
        current_location: 'aba'
      }).set('Authorization', "Bearer ".concat(user.token)).then(function (res) {
        (0, _chai.expect)(res.status).to.equal(415);
      });
    });
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
  describe('GET route  for parcels', function () {
    it('should return http code 200', function () {
      return (0, _supertest.default)(_server.default).get('/api/v1/parcels').set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1lQGdtYWlsLmNvbSIsImlkIjo1LCJpYXQiOjE1NDI5MDg5OTAsImV4cCI6MTU0MzA4MTc5MH0.ZfZXyqfXybCOuFo4K5IW7CvdW-_qVPw-0XS5FJHGdYA').then(function (res) {
        (0, _chai.expect)(res.status).to.equal(200);
      });
    });
    it('should return http code 200', function () {
      return (0, _supertest.default)(_server.default).get("/api/v1/parcels/".concat(user.id)).set('Authorization', "Bearer ".concat(user.token)).then(function (res) {
        (0, _chai.expect)(res.status).to.equal(200);
      });
    });
    it('should return http code of 204 on cancel', function () {
      return (0, _supertest.default)(_server.default).get("/api/v1/parcels/".concat(user.id, "/cancel")).set('Authorization', "Bearer ".concat(user.token)).then(function (res) {
        (0, _chai.expect)(res.status).to.equal(204);
      });
    });
  });
});