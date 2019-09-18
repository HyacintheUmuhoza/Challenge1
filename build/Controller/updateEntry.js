"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _entriesModel = _interopRequireDefault(require("../Models/entriesModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var putEntry = function putEntry(req, res) {
  var id = parseInt(req.params.id, 10);
  var entryFound;
  var itemIndex;

  _entriesModel["default"].map(function (entry, index) {
    if (entry.id === id) {
      entryFound = entry;
      itemIndex = index;
    }
  });

  if (!entryFound) {
    return res.status(404).send({
      success: 'false',
      message: 'entry not found'
    });
  }

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

  var updatedEntry = {
    id: entryFound.id,
    title: req.body.title || entryFound.title,
    description: req.body.description || entryFound.description
  };

  _entriesModel["default"].splice(itemIndex, 1, updatedEntry);

  return res.status(201).send({
    success: 'true',
    message: 'Entry added successfully',
    updatedEntry: updatedEntry
  });
};

var _default = putEntry;
exports["default"] = _default;