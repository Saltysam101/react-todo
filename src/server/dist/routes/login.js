"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _express = _interopRequireDefault(require("express"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _utils = _interopRequireDefault(require("../db/utils"));

var router = _express["default"].Router();

router.get("/", /*#__PURE__*/function () {var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {return _regenerator["default"].wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
              req.session.user);case 2:if (!_context.sent) {_context.next = 6;break;}
            res.send({ loggedIn: true, user: req.session.user });_context.next = 7;break;case 6:

            res.send({ loggedIn: false });case 7:case "end":return _context.stop();}}}, _callee);}));return function (_x, _x2) {return _ref.apply(this, arguments);};}());



router.post("/", /*#__PURE__*/function () {var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {var email, password, user;return _regenerator["default"].wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
            email = req.body.email;
            password = req.body.password;_context2.next = 4;return (

              (0, _utils["default"])("SELECT * FROM users WHERE Email = ?", [email]));case 4:user = _context2.sent;

            _bcrypt["default"].compare(password, user[0].Password, function (err, response) {
              if (err) {
                console.error(err);
              } else if (response === true) {
                req.session.user = user;
                //console.log("reqsession", req.session.user)

                //console.log("session", req.sessionID)
                //console.log("cookie", req.session.cookie)
                console.log("login successful");
                res.status(200).send(req.session.user);
                /* console.log(user) */
              } else {
                console.log("incorrect credentials");
                res.status(401).send("incorrect credentials");
              }
            });case 6:case "end":return _context2.stop();}}}, _callee2);}));return function (_x3, _x4) {return _ref2.apply(this, arguments);};}());var _default =


router;exports["default"] = _default;
//# sourceMappingURL=login.js.map