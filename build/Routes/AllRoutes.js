"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _AddEntry = _interopRequireDefault(require("../Controller/AddEntry"));

var _DeleteEntry = _interopRequireDefault(require("../Controller/DeleteEntry"));

var _getAll = _interopRequireDefault(require("../Controller/getAll"));

var _getSpecific = _interopRequireDefault(require("../Controller/getSpecific"));

var _updateEntry = _interopRequireDefault(require("../Controller/updateEntry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import all folder from Controller
var router = _express["default"].Router();

router.get('/api/p1/entries', _getAll["default"]);
router.get('/api/p1/entries/:id', _getSpecific["default"]);
router["delete"]('/api/p1/entries/:id', _DeleteEntry["default"]);
router.post('/api/p1/entries', _AddEntry["default"]);
router.put('/api/p1/entries/:id', _updateEntry["default"]);
var _default = router;
exports["default"] = _default;