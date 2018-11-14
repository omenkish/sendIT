"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _parcelOrder = _interopRequireDefault(require("../models/parcelOrder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ParcelOrder = {
  create: function create(req, res) {
    if (!req.body.orderNo && !req.body.address && !req.body.presentLocation && !req.body.status && !req.body.price && !req.body.description) {
      return res.status(400).send('message: All fields are required!');
    }

    var parcelOrder = _parcelOrder.default.create(req.body);

    return res.status(201).send(parcelOrder);
  },
  getAll: function getAll(req, res) {
    var parcelOrders = _parcelOrder.default.findAll();

    return res.status(200).send(parcelOrders);
  },
  getOne: function getOne(req, res) {
    var parcelOrder = _parcelOrder.default.findOne(req.params.id);

    if (!parcelOrder) {
      return res.status(404).send({
        'message: ': 'Order with this ID does not exist.'
      });
    }

    return res.status(200).send(parcelOrder);
  },
  update: function update(req, res) {
    var parcelOrder = _parcelOrder.default.findOne(req.params.id);

    if (!parcelOrder) {
      return res.status(404).send({
        'message': ' Order not found'
      });
    }

    var updatedParcelOrder = _parcelOrder.default.update(req.params.id, req.body);

    return res.status(200).send(updatedParcelOrder);
  },
  delete: function _delete(req, res) {
    var parcelOrder = _parcelOrder.default.findOne(req.params.id);

    if (!parcelOrder) {
      return res.status(404).send({
        'message': 'Order not found'
      });
    }

    var ref = _parcelOrder.default.delete(req.params.id);

    return res.status(204).send(ref);
  }
};
var _default = ParcelOrder;
exports.default = _default;