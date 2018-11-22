"use strict";

var cov_190ox26wfs = function () {
  var path = "C:\\Users\\Eneojo\\Desktop\\Branches\\develop\\server\\db\\index.js",
      hash = "7ed707ad8fcfd28ef9185e45b2c88671d288af5a",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "C:\\Users\\Eneojo\\Desktop\\Branches\\develop\\server\\db\\index.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 0
        },
        end: {
          line: 4,
          column: 16
        }
      },
      "1": {
        start: {
          line: 5,
          column: 26
        },
        end: {
          line: 5,
          column: 123
        }
      },
      "2": {
        start: {
          line: 6,
          column: 13
        },
        end: {
          line: 6,
          column: 42
        }
      },
      "3": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 24,
          column: 6
        }
      },
      "4": {
        start: {
          line: 17,
          column: 6
        },
        end: {
          line: 23,
          column: 8
        }
      },
      "5": {
        start: {
          line: 19,
          column: 8
        },
        end: {
          line: 19,
          column: 21
        }
      },
      "6": {
        start: {
          line: 22,
          column: 8
        },
        end: {
          line: 22,
          column: 20
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 15,
            column: 2
          },
          end: {
            line: 15,
            column: 3
          }
        },
        loc: {
          start: {
            line: 15,
            column: 21
          },
          end: {
            line: 25,
            column: 3
          }
        },
        line: 15
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 16,
            column: 23
          },
          end: {
            line: 16,
            column: 24
          }
        },
        loc: {
          start: {
            line: 16,
            column: 44
          },
          end: {
            line: 24,
            column: 5
          }
        },
        line: 16
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 18,
            column: 12
          },
          end: {
            line: 18,
            column: 13
          }
        },
        loc: {
          start: {
            line: 18,
            column: 21
          },
          end: {
            line: 20,
            column: 7
          }
        },
        line: 18
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 21,
            column: 13
          },
          end: {
            line: 21,
            column: 14
          }
        },
        loc: {
          start: {
            line: 21,
            column: 22
          },
          end: {
            line: 23,
            column: 7
          }
        },
        line: 21
      }
    },
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
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
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

var _pg = require("pg");

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cov_190ox26wfs.s[0]++;

_dotenv.default.config();

var connectionString = (cov_190ox26wfs.s[1]++, 'postgres://lquxwgaw:RgsKAn2mJNGS3y_4jd90R85DqI-6e8mS@pellefant.db.elephantsql.com:5432/lquxwgaw');
var pool = (cov_190ox26wfs.s[2]++, new _pg.Pool({
  connectionString: connectionString
}));
var _default = {
  /**
   * DB Query
   * @param {object} req
   * @param {object} res
   * @returns {object} object 
   */
  query: function query(text, params) {
    cov_190ox26wfs.f[0]++;
    cov_190ox26wfs.s[3]++;
    return new Promise(function (resolve, reject) {
      cov_190ox26wfs.f[1]++;
      cov_190ox26wfs.s[4]++;
      pool.query(text, params).then(function (res) {
        cov_190ox26wfs.f[2]++;
        cov_190ox26wfs.s[5]++;
        resolve(res);
      }).catch(function (err) {
        cov_190ox26wfs.f[3]++;
        cov_190ox26wfs.s[6]++;
        reject(err);
      });
    });
  }
};
exports.default = _default;