"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _entriesModel = _interopRequireDefault(require("../Models/entriesModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getEntry = function getEntry(req, res) {
  var id = parseInt(req.params.id, 10);

  _entriesModel["default"].map(function (entry) {
    if (entry.id === id) {
      return res.status(200).send({
        success: 'true',
        message: 'entry retrieved  successfully',
        entry: entry
      });
    }
  });

  return res.status(404).send({
    success: 'false',
    message: 'entry does not exist'
  });
};

var _default = getEntry;
exports["default"] = _default;