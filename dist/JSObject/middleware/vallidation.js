"use strict";

var cov_2oq83j17so = function () {
  var path = "C:\\Users\\Eneojo\\Desktop\\Branches\\develop\\server\\JSObject\\middleware\\vallidation.js",
      hash = "ce495d0dabb1db9f9809d9a6f66c5f615238b36b",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "C:\\Users\\Eneojo\\Desktop\\Branches\\develop\\server\\JSObject\\middleware\\vallidation.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 30
        },
        end: {
          line: 12,
          column: 5
        }
      },
      "1": {
        start: {
          line: 14,
          column: 22
        },
        end: {
          line: 14,
          column: 64
        }
      },
      "2": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 26
        }
      },
      "3": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 18,
          column: 5
        }
      },
      "4": {
        start: {
          line: 17,
          column: 8
        },
        end: {
          line: 17,
          column: 60
        }
      },
      "5": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 18
        }
      },
      "6": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 33,
          column: 5
        }
      },
      "7": {
        start: {
          line: 25,
          column: 6
        },
        end: {
          line: 27,
          column: 7
        }
      },
      "8": {
        start: {
          line: 26,
          column: 8
        },
        end: {
          line: 26,
          column: 59
        }
      },
      "9": {
        start: {
          line: 28,
          column: 6
        },
        end: {
          line: 30,
          column: 7
        }
      },
      "10": {
        start: {
          line: 29,
          column: 8
        },
        end: {
          line: 29,
          column: 68
        }
      },
      "11": {
        start: {
          line: 32,
          column: 6
        },
        end: {
          line: 32,
          column: 20
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 2
          },
          end: {
            line: 5,
            column: 3
          }
        },
        loc: {
          start: {
            line: 5,
            column: 37
          },
          end: {
            line: 21,
            column: 3
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        },
        loc: {
          start: {
            line: 23,
            column: 22
          },
          end: {
            line: 35,
            column: 3
          }
        },
        line: 23
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 24,
            column: 11
          },
          end: {
            line: 24,
            column: 12
          }
        },
        loc: {
          start: {
            line: 24,
            column: 31
          },
          end: {
            line: 33,
            column: 5
          }
        },
        line: 24
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 18,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 18,
            column: 5
          }
        }, {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 18,
            column: 5
          }
        }],
        line: 16
      },
      "1": {
        loc: {
          start: {
            line: 25,
            column: 6
          },
          end: {
            line: 27,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 25,
            column: 6
          },
          end: {
            line: 27,
            column: 7
          }
        }, {
          start: {
            line: 25,
            column: 6
          },
          end: {
            line: 27,
            column: 7
          }
        }],
        line: 25
      },
      "2": {
        loc: {
          start: {
            line: 28,
            column: 6
          },
          end: {
            line: 30,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 28,
            column: 6
          },
          end: {
            line: 30,
            column: 7
          }
        }, {
          start: {
            line: 28,
            column: 6
          },
          end: {
            line: 30,
            column: 7
          }
        }],
        line: 28
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
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

var _validatorjs = _interopRequireDefault(require("validatorjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Validate =
/*#__PURE__*/
function () {
  function Validate() {
    _classCallCheck(this, Validate);
  }

  _createClass(Validate, null, [{
    key: "createParcel",
    value: function createParcel(req, res, next) {
      cov_2oq83j17so.f[0]++;
      var CreateParcelRules = (cov_2oq83j17so.s[0]++, {
        // id: 'required|digits:5',
        destination: 'required',
        presentLocation: 'required',
        price: 'required|numeric',
        description: 'required'
      });
      var validator = (cov_2oq83j17so.s[1]++, new _validatorjs.default(req.body, CreateParcelRules));
      cov_2oq83j17so.s[2]++;
      console.log(req.body);
      cov_2oq83j17so.s[3]++;

      if (validator.fails()) {
        cov_2oq83j17so.b[0][0]++;
        cov_2oq83j17so.s[4]++;
        return res.status(400).json(validator.errors.all());
      } else {
        cov_2oq83j17so.b[0][1]++;
      }

      cov_2oq83j17so.s[5]++;
      return next();
    }
  }, {
    key: "getUserById",
    value: function getUserById() {
      cov_2oq83j17so.f[1]++;
      cov_2oq83j17so.s[6]++;
      return function (req, res, next) {
        cov_2oq83j17so.f[2]++;
        cov_2oq83j17so.s[7]++;

        if (!Number(req.params.id)) {
          cov_2oq83j17so.b[1][0]++;
          cov_2oq83j17so.s[8]++;
          return res.status(400).send('id must be a number');
        } else {
          cov_2oq83j17so.b[1][1]++;
        }

        cov_2oq83j17so.s[9]++;

        if (!req.params.id) {
          cov_2oq83j17so.b[2][0]++;
          cov_2oq83j17so.s[10]++;
          return res.status(404).send('No parcel found with this Id');
        } else {
          cov_2oq83j17so.b[2][1]++;
        }

        cov_2oq83j17so.s[11]++;
        return next();
      };
    }
  }]);

  return Validate;
}();

var _default = Validate;
exports.default = _default;