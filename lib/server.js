"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.use(_express.default.json());
var port = process.eventNames.PORT || 8000;
app.get('/', function (req, res) {
  res.send('Testing connection');
});
app.listen(port, function () {
  console.log('connected on port ', port);
});
var _default = app;
exports.default = _default;