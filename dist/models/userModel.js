"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var User =
/*#__PURE__*/
function () {
  /**
   * class constructor
   * @param {object} data
   */
  function User() {
    _classCallCheck(this, User);

    this.users = [];
  }
  /**
   * 
   * @returns formated date
   */


  _createClass(User, [{
    key: "currentTime",
    value: function currentTime() {
      return (0, _moment.default)().format("dddd, MMMM Do YYYY, h:mm:ss a");
    }
    /**
     * 
     * @returns {object} user object
     */

  }, {
    key: "create",
    value: function create(data) {
      var newUser = {
        id: this.users.length + 1,
        username: data.username || '',
        email: data.email || '',
        password: data.password || '',
        createdDate: this.currentTime(),
        modifiedDate: this.currentTime()
      };
      this.users.push(newUser);
      return newUser;
    }
    /**
     * 
     * @param  id
     * @returns {object} parcel order object
     */

  }, {
    key: "findUser",
    value: function findUser(id) {
      return this.users.find(function (user) {
        return user.id === parseInt(id);
      });
    }
    /**
     * 
     * @returns {object} all parcel order objects
     */

  }, {
    key: "findUsers",
    value: function findUsers() {
      return this.users;
    }
    /**
     * @param id
     * @param data
     * @returns {object} all parcel order objects
     */

  }, {
    key: "update",
    value: function update(id, data) {
      var user = this.findUser(id);
      var index = this.users.indexOf(user);
      this.users[index].username = data['username'] || user.username;
      this.users[index].email = data['email'] || user.email;
      this.users[index].password = data['password'] || user.password;
      this.users[index].modifiedDate = this.currentTime();
      return this.users[index];
    }
    /**
     * 
     * @param id 
     * @returns {} empty array
     */

  }, {
    key: "delete",
    value: function _delete(id) {
      var user = this.findUser(id);
      var index = this.users.indexOf(user);
      this.users.splice(index, 1);
      return {};
    }
  }]);

  return User;
}();

var _default = new User();

exports.default = _default;