"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _v = _interopRequireDefault(require("uuid/v4"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ParcelOrder =
/*#__PURE__*/
function () {
  /**
   * class constructor
   * @param {object} data
   */
  function ParcelOrder() {
    _classCallCheck(this, ParcelOrder);

    this.parcelOrders = [{
      id: (0, _v.default)(),
      userId: 1,
      orderNo: Math.random().toString(36).substring(8),
      address: 'Badagry',
      presentLocation: 'Birom',
      status: 'Transit',
      price: 2000,
      description: 'Black leather belt',
      createdDate: this.currentTime(),
      modifiedDate: this.currentTime()
    }];
  }
  /**
   * 
   * @returns formated date
   */


  _createClass(ParcelOrder, [{
    key: "currentTime",
    value: function currentTime() {
      return (0, _moment.default)().format("dddd, MMMM Do YYYY, h:mm:ss a");
    }
    /**
     * 
     * @returns {object} parcel order object
     */

  }, {
    key: "create",
    value: function create(data) {
      var parcels = this.parcelOrders;
      var orderNumber = Math.random().toString(36).substring(8);
      var found = parcels.find(function (parcel) {
        return parcel.orderNo === orderNumber;
      });

      if (found) {
        orderNumber = Math.random().toString(36).substring(8);
      }

      var newParcelOrder = {
        id: (0, _v.default)(),
        userId: data.userId || '',
        orderNo: orderNumber,
        address: data.address || '',
        presentLocation: data.presentLocation || '',
        status: data.status || '',
        price: data.price || '',
        description: data.description || '',
        createdDate: this.currentTime(),
        modifiedDate: this.currentTime()
      };
      this.parcelOrders.push(newParcelOrder);
      return newParcelOrder;
    }
    /**
     * 
     * @param  id
     * @returns {object} parcel order object
     */

  }, {
    key: "findOne",
    value: function findOne(id) {
      return this.parcelOrders.find(function (parcelOrder) {
        return parcelOrder.id === id;
      });
    }
    /**
     * 
     * @returns {object} all parcel order objects
     */

  }, {
    key: "findAll",
    value: function findAll() {
      return this.parcelOrders;
    }
  }, {
    key: "update",
    value: function update(id, data) {
      var parcelOrder = this.findOne(id);
      var index = this.parcelOrders.indexOf(parcelOrder);
      this.parcelOrders[index].address = data['address'] || parcelOrder.address;
      this.parcelOrders[index].presentLocation = data['presentLocation'] || parcelOrder.presentLocation;
      this.parcelOrders[index].status = data['status'] || parcelOrder.status;
      this.parcelOrders[index].description = data['description'] || parcelOrder.description;
      this.parcelOrders[index].modifiedDate = this.currentTime();
      return this.parcelOrders[index];
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      var parcelOrder = this.findOne(id);
      var index = this.parcelOrders.indexOf(parcelOrder);
      this.parcelOrders.splice(index, 1);
      return {};
    }
  }]);

  return ParcelOrder;
}();

var _default = new ParcelOrder();

exports.default = _default;