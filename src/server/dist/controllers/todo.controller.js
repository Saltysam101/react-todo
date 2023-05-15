"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.updateTodo = exports.selectTodos = exports.deleteTodo = exports.addTodo = void 0;var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _utils = _interopRequireDefault(require("../db/utils"));

var addTodo = /*#__PURE__*/function () {var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(todos) {return _regenerator["default"].wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:return _context.abrupt("return",
            (0, _utils["default"])("INSERT INTO todos SET ?", [todos]));case 1:case "end":return _context.stop();}}}, _callee);}));return function addTodo(_x) {return _ref.apply(this, arguments);};}();exports.addTodo = addTodo;


var selectTodos = /*#__PURE__*/function () {var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(userId) {return _regenerator["default"].wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:return _context2.abrupt("return",
            (0, _utils["default"])("SELECT * FROM todos WHERE userID = ?", [userId]));case 1:case "end":return _context2.stop();}}}, _callee2);}));return function selectTodos(_x2) {return _ref2.apply(this, arguments);};}();exports.selectTodos = selectTodos;


var updateTodo = /*#__PURE__*/function () {var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(todo, userId, id) {return _regenerator["default"].wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:return _context3.abrupt("return",
            (0, _utils["default"])("UPDATE todos SET todo = ? WHERE userID = ? AND id =?", [todo, userId, id]));case 1:case "end":return _context3.stop();}}}, _callee3);}));return function updateTodo(_x3, _x4, _x5) {return _ref3.apply(this, arguments);};}();exports.updateTodo = updateTodo;


var deleteTodo = /*#__PURE__*/function () {var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(userId, id) {return _regenerator["default"].wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:return _context4.abrupt("return",
            (0, _utils["default"])("DELETE FROM todos WHERE userID = ? AND id = ?", [userId, id]));case 1:case "end":return _context4.stop();}}}, _callee4);}));return function deleteTodo(_x6, _x7) {return _ref4.apply(this, arguments);};}();exports.deleteTodo = deleteTodo;
//# sourceMappingURL=todo.controller.js.map