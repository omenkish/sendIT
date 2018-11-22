"use strict";

var cov_2gecbkjp5r = function () {
  var path = "C:\\Users\\Eneojo\\Desktop\\Branches\\develop\\server\\routes\\auth.js",
      hash = "590cd969b6d571a676f908c88fddda30ad64bf0f",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "C:\\Users\\Eneojo\\Desktop\\Branches\\develop\\server\\routes\\auth.js",
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
          line: 7,
          column: 0
        },
        end: {
          line: 8,
          column: 45
        }
      },
      "2": {
        start: {
          line: 10,
          column: 0
        },
        end: {
          line: 11,
          column: 35
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
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

var _validate = _interopRequireDefault(require("../middleware/validate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (cov_2gecbkjp5r.s[0]++, _express.default.Router());
cov_2gecbkjp5r.s[1]++;
router.route('/auth/signup').post(_validate.default.createUser, _User.default.createUser);
cov_2gecbkjp5r.s[2]++;
router.route('/auth/login').post(_validate.default.login, _User.default.login);
var _default = router;
exports.default = _default;