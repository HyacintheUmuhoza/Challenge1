"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _AllRoutes = _interopRequireDefault(require("./Routes/AllRoutes"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use('/', _AllRoutes["default"]);
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("server running on port ".concat(port));
});
var _default = app;
exports["default"] = _default;