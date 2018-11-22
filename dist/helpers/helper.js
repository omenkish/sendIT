"use strict";

var cov_1qyigafre7 = function () {
  var path = "C:\\Users\\Eneojo\\Desktop\\Branches\\develop\\server\\helpers\\helper.js",
      hash = "7184c45339a06ec95639b44a8834aa37c6f923ce",
      Function = function () {}.constructor,
      global = new Function('return this')(),
      gcv = "__coverage__",
      coverageData = {
    path: "C:\\Users\\Eneojo\\Desktop\\Branches\\develop\\server\\helpers\\helper.js",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 60
        }
      },
      "1": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 54
        }
      },
      "2": {
        start: {
          line: 36,
          column: 18
        },
        end: {
          line: 40,
          column: 5
        }
      },
      "3": {
        start: {
          line: 41,
          column: 4
        },
        end: {
          line: 41,
          column: 17
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 10,
            column: 3
          }
        },
        loc: {
          start: {
            line: 10,
            column: 32
          },
          end: {
            line: 12,
            column: 3
          }
        },
        line: 10
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 20,
            column: 3
          }
        },
        loc: {
          start: {
            line: 20,
            column: 49
          },
          end: {
            line: 22,
            column: 3
          }
        },
        line: 20
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 35,
            column: 2
          },
          end: {
            line: 35,
            column: 3
          }
        },
        loc: {
          start: {
            line: 35,
            column: 34
          },
          end: {
            line: 42,
            column: 3
          }
        },
        line: 35
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
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

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Helper =
/*#__PURE__*/
function () {
  function Helper() {
    _classCallCheck(this, Helper);
  }

  _createClass(Helper, null, [{
    key: "hashPassword",

    /**
     * Hash Password Method
     * @param {string} password
     * @returns {string} returns hashed password
     */
    value: function hashPassword(password) {
      cov_1qyigafre7.f[0]++;
      cov_1qyigafre7.s[0]++;
      return _bcrypt.default.hashSync(password, _bcrypt.default.genSaltSync(10));
    }
    /**
    * comparePassword
    * @param {string} hashPassword 
    * @param {string} password 
    * @returns {Boolean} returns True or False
    */

  }, {
    key: "comparePassword",
    value: function comparePassword(hashPassword, password) {
      cov_1qyigafre7.f[1]++;
      cov_1qyigafre7.s[1]++;
      return _bcrypt.default.compareSync(password, hashPassword);
    }
    /**
     * isValidEmail helper method
     * @param {string} email
     * @returns {Boolean} True or False
     */

    /**
     * Gnerate Token
     * @param {string} id
     * @returns {string} token
     */

  }, {
    key: "generateToken",
    value: function generateToken(email, id) {
      cov_1qyigafre7.f[2]++;
      var token = (cov_1qyigafre7.s[2]++, _jsonwebtoken.default.sign({
        email: email,
        id: id
      }, process.env.JWT_SECRET, {
        expiresIn: '2d'
      }));
      cov_1qyigafre7.s[3]++;
      return token;
    }
  }]);

  return Helper;
}();

var _default = Helper;
exports.default = _default;