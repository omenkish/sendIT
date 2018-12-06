"use strict";

var cov_naaqkb5sf = function () {
  var path = "C:\\Users\\Eneojo\\Desktop\\Branches\\develop\\server\\JSObject\\routes\\user.js",
      hash = "449fcf89a0b2adb74157d4c5b5032071dce717a4",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "C:\\Users\\Eneojo\\Desktop\\Branches\\develop\\server\\JSObject\\routes\\user.js",
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
          line: 6,
          column: 0
        },
        end: {
          line: 6,
          column: 30
        }
      },
      "2": {
        start: {
          line: 7,
          column: 0
        },
        end: {
          line: 7,
          column: 48
        }
      },
      "3": {
        start: {
          line: 8,
          column: 0
        },
        end: {
          line: 8,
          column: 31
        }
      },
      "4": {
        start: {
          line: 9,
          column: 0
        },
        end: {
          line: 9,
          column: 33
        }
      },
      "5": {
        start: {
          line: 10,
          column: 0
        },
        end: {
          line: 10,
          column: 39
        }
      },
      "6": {
        start: {
          line: 11,
          column: 0
        },
        end: {
          line: 11,
          column: 31
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
      "5": 0,
      "6": 0
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

var _user = _interopRequireDefault(require("../controllers/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (cov_naaqkb5sf.s[0]++, _express.default.Router());
cov_naaqkb5sf.s[1]++;
router.post('/', _user.default.create);
cov_naaqkb5sf.s[2]++;
router.get('/:id/parcels', _user.default.getUserParcels);
cov_naaqkb5sf.s[3]++;
router.get('/', _user.default.getUsers);
cov_naaqkb5sf.s[4]++;
router.get('/:id', _user.default.getUser);
cov_naaqkb5sf.s[5]++;
router.put('/:id/cancel', _user.default.delete);
cov_naaqkb5sf.s[6]++;
router.put('/:id', _user.default.update);
var _default = router;
exports.default = _default;