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
  email: 'omenkish@gmail.com'
};
describe('ROUTES FOR PARCELS', function () {
  describe('POST {when a parcel is being created}', function () {
    it('should return status code 201', function () {
      return (0, _supertest.default)(_server.default).post('/api/v1/parcels').send(validParcel).set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9tZW5raXNoMTIzQGdtYWlsLmNvbSIsImlkIjo0LCJpYXQiOjE1NDI4NDM5MjcsImV4cCI6MTU0MzAxNjcyN30.S8AuF2RzVxjV8-4bCQfwB0WUDxjokmS_nq7nIWjWW-M').then(function (res) {
        (0, _chai.expect)(res.status).to.equal(201);
      }).catch(function (err) {
        console.log('=================> Error', err);
      });
    });
  });
});