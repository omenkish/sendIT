"use strict";

var cov_2f18ur6zp7 = function () {
  var path = "C:\\Users\\Eneojo\\Desktop\\Branches\\develop\\server\\server.js",
      hash = "93d7ae1271c914ab3215beb202ba2c4a203f5ea0",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "C:\\Users\\Eneojo\\Desktop\\Branches\\develop\\server\\server.js",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 0
        },
        end: {
          line: 13,
          column: 1
        }
      },
      "1": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 12,
          column: 29
        }
      },
      "2": {
        start: {
          line: 15,
          column: 12
        },
        end: {
          line: 15,
          column: 21
        }
      },
      "3": {
        start: {
          line: 17,
          column: 0
        },
        end: {
          line: 17,
          column: 51
        }
      },
      "4": {
        start: {
          line: 18,
          column: 0
        },
        end: {
          line: 18,
          column: 27
        }
      },
      "5": {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 22,
          column: 3
        }
      },
      "6": {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 21,
          column: 49
        }
      },
      "7": {
        start: {
          line: 24,
          column: 0
        },
        end: {
          line: 24,
          column: 35
        }
      },
      "8": {
        start: {
          line: 25,
          column: 0
        },
        end: {
          line: 25,
          column: 31
        }
      },
      "9": {
        start: {
          line: 26,
          column: 0
        },
        end: {
          line: 26,
          column: 30
        }
      },
      "10": {
        start: {
          line: 28,
          column: 13
        },
        end: {
          line: 28,
          column: 37
        }
      },
      "11": {
        start: {
          line: 29,
          column: 0
        },
        end: {
          line: 31,
          column: 3
        }
      },
      "12": {
        start: {
          line: 30,
          column: 2
        },
        end: {
          line: 30,
          column: 56
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 20,
            column: 13
          },
          end: {
            line: 20,
            column: 14
          }
        },
        loc: {
          start: {
            line: 20,
            column: 27
          },
          end: {
            line: 22,
            column: 1
          }
        },
        line: 20
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 29,
            column: 17
          },
          end: {
            line: 29,
            column: 18
          }
        },
        loc: {
          start: {
            line: 29,
            column: 23
          },
          end: {
            line: 31,
            column: 1
          }
        },
        line: 29
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 11,
            column: 0
          },
          end: {
            line: 13,
            column: 1
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 11,
            column: 0
          },
          end: {
            line: 13,
            column: 1
          }
        }, {
          start: {
            line: 11,
            column: 0
          },
          end: {
            line: 13,
            column: 1
          }
        }],
        line: 11
      },
      "1": {
        loc: {
          start: {
            line: 28,
            column: 13
          },
          end: {
            line: 28,
            column: 37
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 28,
            column: 13
          },
          end: {
            line: 28,
            column: 29
          }
        }, {
          start: {
            line: 28,
            column: 33
          },
          end: {
            line: 28,
            column: 37
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
      "11": 0,
      "12": 0
    },
    f: {
      "0": 0,
      "1": 0
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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

require("@babel/polyfill");

var _parcel = _interopRequireDefault(require("./routes/parcel"));

var _user = _interopRequireDefault(require("./routes/user"));

var _auth = _interopRequireDefault(require("./routes/auth"));

var _parcels = _interopRequireDefault(require("./models/parcels"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cov_2f18ur6zp7.s[0]++;

// Create tables automatically
if (_parcels.default.createUsersTable()) {
  cov_2f18ur6zp7.b[0][0]++;
  cov_2f18ur6zp7.s[1]++;

  _parcels.default.createParcelsTable();
} else {
  cov_2f18ur6zp7.b[0][1]++;
}

var app = (cov_2f18ur6zp7.s[2]++, (0, _express.default)());
cov_2f18ur6zp7.s[3]++;
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
cov_2f18ur6zp7.s[4]++;
app.use(_bodyParser.default.json());
cov_2f18ur6zp7.s[5]++;
app.get('/', function (req, res) {
  cov_2f18ur6zp7.f[0]++;
  cov_2f18ur6zp7.s[6]++;
  res.status(200).send('Welcome to my Home page');
});
cov_2f18ur6zp7.s[7]++;
app.use('/api/v1/parcels', _parcel.default);
cov_2f18ur6zp7.s[8]++;
app.use('/api/v1/users', _user.default);
cov_2f18ur6zp7.s[9]++;
app.use('/api/v1/', _auth.default);
var port = (cov_2f18ur6zp7.s[10]++, (cov_2f18ur6zp7.b[1][0]++, process.env.PORT) || (cov_2f18ur6zp7.b[1][1]++, 5000));
cov_2f18ur6zp7.s[11]++;
app.listen(port, function () {
  cov_2f18ur6zp7.f[1]++;
  cov_2f18ur6zp7.s[12]++;
  console.log("Server up and running on port: ".concat(port));
});
var _default = app;
exports.default = _default;