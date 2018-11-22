"use strict";

var cov_cdbeuwstd = function () {
  var path = "C:\\Users\\Eneojo\\Desktop\\Branches\\develop\\server\\routes\\parcel.js",
      hash = "1d7b0e15abd60b3540d0b1ff30c5d64d44bae741",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "C:\\Users\\Eneojo\\Desktop\\Branches\\develop\\server\\routes\\parcel.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 15
        },
        end: {
          line: 2,
          column: 31
        }
      },
      "1": {
        start: {
          line: 8,
          column: 0
        },
        end: {
          line: 11,
          column: 46
        }
      },
      "2": {
        start: {
          line: 13,
          column: 0
        },
        end: {
          line: 14,
          column: 77
        }
      },
      "3": {
        start: {
          line: 16,
          column: 0
        },
        end: {
          line: 16,
          column: 65
        }
      },
      "4": {
        start: {
          line: 17,
          column: 0
        },
        end: {
          line: 17,
          column: 89
        }
      },
      "5": {
        start: {
          line: 18,
          column: 0
        },
        end: {
          line: 18,
          column: 69
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184"
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _Parcel = _interopRequireDefault(require("../controllers/Parcel"));

var _authMiddleware = _interopRequireDefault(require("../middleware/authMiddleware"));

var _validate = _interopRequireDefault(require("../middleware/validate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (cov_cdbeuwstd.s[0]++, _express.default.Router());
cov_cdbeuwstd.s[1]++;
router.route('/').all(_authMiddleware.default).post(_validate.default.createParcel, _Parcel.default.createParcelOrder).get(_validate.default.adminOnly, _Parcel.default.getAllParcels);
cov_cdbeuwstd.s[2]++;
router.route('/:id').get(_authMiddleware.default, _validate.default.adminOnly, _validate.default.getById, _Parcel.default.getParcelById);
cov_cdbeuwstd.s[3]++;
router.put('/:id/cancel', _authMiddleware.default, _Parcel.default.cancelParcelOrder);
cov_cdbeuwstd.s[4]++;
router.put('/:id/location', _authMiddleware.default, _validate.default.adminOnly, _Parcel.default.updateCurrentLocation);
cov_cdbeuwstd.s[5]++;
router.put('/:id/destination', _authMiddleware.default, _Parcel.default.changeDestination);
var _default = router;
exports.default = _default;