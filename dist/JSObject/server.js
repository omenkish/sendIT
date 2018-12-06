"use strict";

var cov_p1v0ke1sq = function () {
  var path = "C:\\Users\\Eneojo\\Desktop\\Branches\\develop\\server\\JSObject\\server.js",
      hash = "26ff21bfde2a2a92fdc8b5869ad50b634a708798",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "C:\\Users\\Eneojo\\Desktop\\Branches\\develop\\server\\JSObject\\server.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 12
        },
        end: {
          line: 7,
          column: 21
        }
      },
      "1": {
        start: {
          line: 9,
          column: 0
        },
        end: {
          line: 9,
          column: 51
        }
      },
      "2": {
        start: {
          line: 10,
          column: 0
        },
        end: {
          line: 10,
          column: 27
        }
      },
      "3": {
        start: {
          line: 12,
          column: 0
        },
        end: {
          line: 14,
          column: 2
        }
      },
      "4": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 13,
          column: 49
        }
      },
      "5": {
        start: {
          line: 15,
          column: 0
        },
        end: {
          line: 15,
          column: 35
        }
      },
      "6": {
        start: {
          line: 16,
          column: 0
        },
        end: {
          line: 16,
          column: 31
        }
      },
      "7": {
        start: {
          line: 17,
          column: 0
        },
        end: {
          line: 19,
          column: 2
        }
      },
      "8": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 18,
          column: 47
        }
      },
      "9": {
        start: {
          line: 21,
          column: 13
        },
        end: {
          line: 21,
          column: 37
        }
      },
      "10": {
        start: {
          line: 22,
          column: 0
        },
        end: {
          line: 24,
          column: 3
        }
      },
      "11": {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 23,
          column: 56
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 12,
            column: 13
          },
          end: {
            line: 12,
            column: 14
          }
        },
        loc: {
          start: {
            line: 12,
            column: 27
          },
          end: {
            line: 14,
            column: 1
          }
        },
        line: 12
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 17,
            column: 14
          },
          end: {
            line: 17,
            column: 15
          }
        },
        loc: {
          start: {
            line: 17,
            column: 28
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 17
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 22,
            column: 17
          },
          end: {
            line: 22,
            column: 18
          }
        },
        loc: {
          start: {
            line: 22,
            column: 23
          },
          end: {
            line: 24,
            column: 1
          }
        },
        line: 22
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 21,
            column: 13
          },
          end: {
            line: 21,
            column: 37
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 21,
            column: 13
          },
          end: {
            line: 21,
            column: 29
          }
        }, {
          start: {
            line: 21,
            column: 33
          },
          end: {
            line: 21,
            column: 37
          }
        }],
        line: 21
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

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _parcel = _interopRequireDefault(require("./routes/parcel"));

var _user = _interopRequireDefault(require("./routes/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (cov_p1v0ke1sq.s[0]++, (0, _express.default)());
cov_p1v0ke1sq.s[1]++;
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
cov_p1v0ke1sq.s[2]++;
app.use(_bodyParser.default.json());
cov_p1v0ke1sq.s[3]++;
app.get('/', function (req, res) {
  cov_p1v0ke1sq.f[0]++;
  cov_p1v0ke1sq.s[4]++;
  res.status(200).send('Welcome to my Home page');
});
cov_p1v0ke1sq.s[5]++;
app.use('/api/v1/parcels', _parcel.default);
cov_p1v0ke1sq.s[6]++;
app.use('/api/v1/users', _user.default);
cov_p1v0ke1sq.s[7]++;
app.use('**', function (req, res) {
  cov_p1v0ke1sq.f[1]++;
  cov_p1v0ke1sq.s[8]++;
  return res.status(404).json('Invalid Route');
});
var port = (cov_p1v0ke1sq.s[9]++, (cov_p1v0ke1sq.b[0][0]++, process.env.PORT) || (cov_p1v0ke1sq.b[0][1]++, 3000));
cov_p1v0ke1sq.s[10]++;
app.listen(port, function () {
  cov_p1v0ke1sq.f[2]++;
  cov_p1v0ke1sq.s[11]++;
  console.log("Server up and running on port: ".concat(port));
});
var _default = app;
exports.default = _default;