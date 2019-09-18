"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _entriesModel = _interopRequireDefault(require("../Models/entriesModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var postEntry = function postEntry(req, res) {
  if (!req.body.title) {
    return res.status(400).send({
      success: 'false',
      message: 'title is required'
    });
  } else if (!req.body.description) {
    return res.status(400).send({
      success: 'false',
      message: 'description is required'
    });
  }

  var entry = {
    id: _entriesModel["default"].length + 1,
    title: req.body.title,
    description: req.body.description
  };

  _entriesModel["default"].push(entry);

  return res.status(201).send({
    success: 'true',
    message: 'Entry added successfully',
    entry: entry
  });
};

var _default = postEntry;
exports["default"] = _default;