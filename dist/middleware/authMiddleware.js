"use strict";

var cov_nro72sqz5 = function () {
  var path = "C:\\Users\\Eneojo\\Desktop\\Branches\\develop\\server\\middleware\\authMiddleware.js",
      hash = "635a87c04ed12950100fab8cb73d7f39585293d2",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "C:\\Users\\Eneojo\\Desktop\\Branches\\develop\\server\\middleware\\authMiddleware.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 20,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 18,
          column: 3
        }
      },
      "2": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 7,
          column: 5
        }
      },
      "3": {
        start: {
          line: 6,
          column: 8
        },
        end: {
          line: 6,
          column: 133
        }
      },
      "4": {
        start: {
          line: 8,
          column: 18
        },
        end: {
          line: 8,
          column: 61
        }
      },
      "5": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 11,
          column: 5
        }
      },
      "6": {
        start: {
          line: 10,
          column: 6
        },
        end: {
          line: 10,
          column: 85
        }
      },
      "7": {
        start: {
          line: 12,
          column: 20
        },
        end: {
          line: 12,
          column: 61
        }
      },
      "8": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 27
        }
      },
      "9": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 11
        }
      },
      "10": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 74
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 17
          },
          end: {
            line: 3,
            column: 18
          }
        },
        loc: {
          start: {
            line: 3,
            column: 46
          },
          end: {
            line: 20,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 5,
            column: 4
          },
          end: {
            line: 7,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 5,
            column: 4
          },
          end: {
            line: 7,
            column: 5
          }
        }, {
          start: {
            line: 5,
            column: 4
          },
          end: {
            line: 7,
            column: 5
          }
        }],
        line: 5
      },
      "1": {
        loc: {
          start: {
            line: 9,
            column: 4
          },
          end: {
            line: 11,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 9,
            column: 4
          },
          end: {
            line: 11,
            column: 5
          }
        }, {
          start: {
            line: 9,
            column: 4
          },
          end: {
            line: 11,
            column: 5
          }
        }],
        line: 9
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
      "10": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
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

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cov_nro72sqz5.s[0]++;

module.exports = function (request, response, next) {
  cov_nro72sqz5.f[0]++;
  cov_nro72sqz5.s[1]++;

  try {
    cov_nro72sqz5.s[2]++;

    if (!request.headers.authorization) {
      cov_nro72sqz5.b[0][0]++;
      cov_nro72sqz5.s[3]++;
      return response.status(404).json({
        'status': 401,
        ' Message': 'You do not have access to this page. Provide a valid token'
      });
    } else {
      cov_nro72sqz5.b[0][1]++;
    }

    var token = (cov_nro72sqz5.s[4]++, request.headers.authorization.split(" ")[1]);
    cov_nro72sqz5.s[5]++;

    if (!token) {
      cov_nro72sqz5.b[1][0]++;
      cov_nro72sqz5.s[6]++;
      return response.status(404).json({
        'status': 400,
        'message ': 'Invalid Token'
      });
    } else {
      cov_nro72sqz5.b[1][1]++;
    }

    var decoded = (cov_nro72sqz5.s[7]++, _jsonwebtoken.default.verify(token, process.env.JWT_SECRET));
    cov_nro72sqz5.s[8]++;
    request.user = decoded;
    cov_nro72sqz5.s[9]++;
    next();
  } catch (error) {
    cov_nro72sqz5.s[10]++;
    return response.status(401).json({
      status: 401,
      'Error': "".concat(error, "}")
    });
  }
};