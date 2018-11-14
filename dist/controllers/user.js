"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _userModel = _interopRequireDefault(require("../models/userModel"));

var _parcelOrder = _interopRequireDefault(require("../models/parcelOrder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = {
  create: function create(req, res) {
    if (!req.body.username && !req.body.username && !req.body.username) {
      return res.status(400).send('message: All fields are required!');
    } else {
      var user = _userModel.default.create(req.body);

      return res.status(201).send(user);
    }
  },
  getUserParcels: function getUserParcels(req, res) {
    var parcels = _parcelOrder.default.findAll();

    var userParcels = parcels.filter(function (parcel) {
      return parseInt(parcel.userId) === parseInt(req.params.id);
    });

    if (!userParcels) {
      return res.status(404).send('message: No parcel found for this user.');
    }

    return res.status(200).send(userParcels);
  },
  getUsers: function getUsers(req, res) {
    var users = _userModel.default.findUsers();

    return res.status(200).send(users);
  },
  getUser: function getUser(req, res) {
    var user = _userModel.default.findUser(req.params.id);

    if (!user) {
      return res.status(404).send('message : No user with this Id found');
    }

    return res.status(200).send(user);
  },
  delete: function _delete(req, res) {
    var user = _userModel.default.findUser(req.params.id);

    if (!user) {
      return res.status(404).send({
        'message': 'User not found'
      });
    }

    var ref = _userModel.default.delete(req.params.id);

    return res.status(204).send(ref);
  },
  update: function update(req, res) {
    var user = _userModel.default.findUser(req.params.id);

    if (!user) {
      return res.status(404).send({
        'message': ' User not found'
      });
    }

    var updatedUser = _userModel.default.update(req.params.id, req.body);

    return res.status(200).send(updatedUser);
  }
};
var _default = User;
exports.default = _default;