"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _express = _interopRequireDefault(require("express"));
var _register = require("../controllers/register.controller");
var _bcrypt = _interopRequireDefault(require("bcrypt"));

var saltRound = 10;

var router = _express["default"].Router();

router.get("/", function (req, res) {
  res.send("hi");
});

router.post("/", function (req, res) {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;
  var password = req.body.password;
  _bcrypt["default"].hash(password, saltRound, /*#__PURE__*/function () {var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(err, hash) {var user, data;return _regenerator["default"].wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (!
              err) {_context.next = 4;break;}
              console.error(err);_context.next = 9;break;case 4:


              user = { FirstName: firstName, LastName: lastName, Email: email, Password: hash };_context.next = 7;return (
                (0, _register.registerUser)(user));case 7:data = _context.sent;
              //console.log(data)
              res.json(data);case 9:case "end":return _context.stop();}}}, _callee);}));return function (_x, _x2) {return _ref.apply(this, arguments);};}());


});var _default =

router;exports["default"] = _default;
//# sourceMappingURL=register.js.map