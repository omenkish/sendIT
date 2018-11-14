"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _user = _interopRequireDefault(require("../controllers/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.post('', _user.default.create);
router.get('/:id/parcels', _user.default.getUserParcels);
router.get('', _user.default.getUsers);
router.get('/:id', _user.default.getUser);
router.put('/:id/cancel', _user.default.delete);
router.put('/:id', _user.default.update);
var _default = router;
exports.default = _default;