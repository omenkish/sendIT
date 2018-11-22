"use strict";

var cov_1scny7kvp5 = function () {
  var path = "C:\\Users\\Eneojo\\Desktop\\Branches\\develop\\server\\JSObject\\routes\\parcel.js",
      hash = "541db1c645f8684a9ffa52c8ea3b0c5c56398698",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "C:\\Users\\Eneojo\\Desktop\\Branches\\develop\\server\\JSObject\\routes\\parcel.js",
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
          line: 9,
          column: 48
        }
      },
      "2": {
        start: {
          line: 11,
          column: 0
        },
        end: {
          line: 13,
          column: 33
        }
      },
      "3": {
        start: {
          line: 15,
          column: 0
        },
        end: {
          line: 16,
          column: 25
        }
      },
      "4": {
        start: {
          line: 18,
          column: 0
        },
        end: {
          line: 20,
          column: 3
        }
      },
      "5": {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 19,
          column: 70
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 18,
            column: 19
          },
          end: {
            line: 18,
            column: 20
          }
        },
        loc: {
          start: {
            line: 18,
            column: 33
          },
          end: {
            line: 20,
            column: 1
          }
        },
        line: 18
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0
    },
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

var _parcel = _interopRequireDefault(require("../controllers/parcel"));

var _vallidation = _interopRequireDefault(require("../middleware/vallidation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (cov_1scny7kvp5.s[0]++, _express.default.Router());
cov_1scny7kvp5.s[1]++;
router.route('/').get(_parcel.default.getAll).post(_vallidation.default.createParcel, _parcel.default.create);
cov_1scny7kvp5.s[2]++;
router.route('/:id').get(_parcel.default.getOne).put(_parcel.default.updateLocation);
cov_1scny7kvp5.s[3]++;
router.route(':id/cancel').put(_parcel.default.cancel);
cov_1scny7kvp5.s[4]++;
router.route('**', function (req, res) {
  cov_1scny7kvp5.f[0]++;
  cov_1scny7kvp5.s[5]++;
  return res.status(404).json({
    message: 'This route doesn\'t exist'
  });
});
var _default = router;
exports.default = _default;