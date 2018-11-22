"use strict";

var cov_190ox26wfs = function () {
  var path = "C:\\Users\\Eneojo\\Desktop\\Branches\\develop\\server\\db\\index.js",
      hash = "99747aa6e55ecff5fa73e55bb2940d05ea4bf5c1",
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
          column: 25
        },
        end: {
          line: 5,
          column: 105
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
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 5,
            column: 25
          },
          end: {
            line: 5,
            column: 105
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 5,
            column: 25
          },
          end: {
            line: 5,
            column: 49
          }
        }, {
          start: {
            line: 5,
            column: 53
          },
          end: {
            line: 5,
            column: 105
          }
        }],
        line: 5
      }
    },
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
    b: {
      "0": [0, 0]
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

var _pg = require("pg");

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cov_190ox26wfs.s[0]++;

_dotenv.default.config();

var connectionString = (cov_190ox26wfs.s[1]++, (cov_190ox26wfs.b[0][0]++, process.env.DATABASE_URL) || (cov_190ox26wfs.b[0][1]++, 'postgres://postgres:postgres@127.0.0.1:5432/sendit'));
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