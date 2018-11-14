"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _parcel = _interopRequireDefault(require("./routes/parcel"));

var _user = _interopRequireDefault(require("./routes/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use(_bodyParser.default.json());
app.get('/', function (req, res) {
  res.status(200).send('Welcome to my Home page');
});
app.use('/api/v1/parcels', _parcel.default);
app.use('/api/v1/users', _user.default);
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server up and running on port: ".concat(port));
});
var _default = app;
exports.default = _default;