"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _express = _interopRequireDefault(require("express"));
var _todo = require("../controllers/todo.controller");

var router = _express["default"].Router();

router.get("/", /*#__PURE__*/function () {var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {var userId, data;return _regenerator["default"].wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
            console.log("get");
            userId = req.query.userId;
            //console.log(req.query)
            _context.next = 4;return (0, _todo.selectTodos)(userId);case 4:data = _context.sent;
            res.json(data);case 6:case "end":return _context.stop();}}}, _callee);}));return function (_x, _x2) {return _ref.apply(this, arguments);};}());


router.post("/", /*#__PURE__*/function () {var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {var todos, userId, userTodo, data;return _regenerator["default"].wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
            todos = req.body.todos;
            userId = req.body.userId;
            userTodo = { todo: todos, userID: userId };
            //console.log(req.query)
            _context2.next = 5;return (0, _todo.addTodo)(userTodo);case 5:data = _context2.sent;
            res.json(data);case 7:case "end":return _context2.stop();}}}, _callee2);}));return function (_x3, _x4) {return _ref2.apply(this, arguments);};}());


router.put("/", /*#__PURE__*/function () {var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {var todo, userId, todoId, data;return _regenerator["default"].wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
            todo = req.query.todo;
            userId = req.query.userId;
            todoId = req.query.id;_context3.next = 5;return (
              (0, _todo.updateTodo)(todo, userId, todoId));case 5:data = _context3.sent;
            res.json(data);case 7:case "end":return _context3.stop();}}}, _callee3);}));return function (_x5, _x6) {return _ref3.apply(this, arguments);};}());


router["delete"]("/", /*#__PURE__*/function () {var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {var userId, todoId, data;return _regenerator["default"].wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
            userId = req.query.userId;
            todoId = req.query.id;_context4.next = 4;return (
              (0, _todo.deleteTodo)(userId, todoId));case 4:data = _context4.sent;
            res.json(data);case 6:case "end":return _context4.stop();}}}, _callee4);}));return function (_x7, _x8) {return _ref4.apply(this, arguments);};}());var _default =


router;exports["default"] = _default;
//# sourceMappingURL=todo.js.map