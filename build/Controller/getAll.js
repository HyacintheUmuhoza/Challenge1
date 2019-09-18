"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _entriesModel = _interopRequireDefault(require("../Models/entriesModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAllEntries = function getAllEntries(req, res) {
  res.status(200).send({
    success: 'true',
    message: 'View your entries list',
    entries: _entriesModel["default"]
  });
};

var _default = getAllEntries;
exports["default"] = _default;