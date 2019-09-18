"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _entriesModel = _interopRequireDefault(require("../Models/entriesModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var deleteEntry = function deleteEntry(req, res) {
  var id = parseInt(req.params.id, 10);

  _entriesModel["default"].map(function (entry, index) {
    if (entry.id === id) {
      _entriesModel["default"].splice(index, 1);

      return res.status(200).send({
        success: 'true',
        message: 'Entry deleted successfuly'
      });
    }
  });

  return res.status(404).send({
    success: 'false',
    message: 'entry not found'
  });
};

var _default = deleteEntry;
exports["default"] = _default;