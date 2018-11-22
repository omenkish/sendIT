"use strict";

var cov_1drc5hkhtx = function () {
  var path = "C:\\Users\\Eneojo\\Desktop\\Branches\\develop\\server\\routes\\user.js",
      hash = "a519fcc110d5754f132bd7ca4c55262fc0564d27",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "C:\\Users\\Eneojo\\Desktop\\Branches\\develop\\server\\routes\\user.js",
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
          line: 9,
          column: 0
        },
        end: {
          line: 10,
          column: 45
        }
      },
      "2": {
        start: {
          line: 12,
          column: 0
        },
        end: {
          line: 13,
          column: 35
        }
      },
      "3": {
        start: {
          line: 15,
          column: 0
        },
        end: {
          line: 16,
          column: 34
        }
      },
      "4": {
        start: {
          line: 18,
          column: 0
        },
        end: {
          line: 18,
          column: 56
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
      "4": 0
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

var _User = _interopRequireDefault(require("../controllers/User"));

var _Parcel = _interopRequireDefault(require("../controllers/Parcel"));

var _authMiddleware = _interopRequireDefault(require("../middleware/authMiddleware"));

var _validate = _interopRequireDefault(require("../middleware/validate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (cov_1drc5hkhtx.s[0]++, _express.default.Router());
cov_1drc5hkhtx.s[1]++;
router.route('/auth/signup').post(_validate.default.createUser, _User.default.createUser);
cov_1drc5hkhtx.s[2]++;
router.route('/auth/login').post(_validate.default.login, _User.default.login);
cov_1drc5hkhtx.s[3]++;
router.route('/:id/parcels').get(_authMiddleware.default, _Parcel.default.getUserParcels);
cov_1drc5hkhtx.s[4]++;
router.get('/', _authMiddleware.default, _validate.default.adminOnly, _User.default.getUsers);
var _default = router;
exports.default = _default;