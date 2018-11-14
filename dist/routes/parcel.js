"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _parcel = _interopRequireDefault(require("../controllers/parcel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.post('', _parcel.default.create);
router.get('', _parcel.default.getAll);
router.get('/:id', _parcel.default.getOne);
router.put('/:id', _parcel.default.update);
router.put('/:id/cancel', _parcel.default.delete);
var _default = router;
exports.default = _default;