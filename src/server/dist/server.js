"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");var _typeof = require("@babel/runtime/helpers/typeof");var _express = _interopRequireWildcard(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _routes = _interopRequireDefault(require("./routes"));
var _register = _interopRequireDefault(require("./routes/register"));
var _login = _interopRequireDefault(require("./routes/login"));
var _todo = _interopRequireDefault(require("./routes/todo"));
var _config = _interopRequireDefault(require("./config"));
var _errorHandler = require("./middlewares/errorHandler");
var _path = require("path");
var _expressSession = _interopRequireDefault(require("express-session"));
var _bodyParser = _interopRequireDefault(require("body-parser"));function _getRequireWildcardCache(nodeInterop) {if (typeof WeakMap !== "function") return null;var cacheBabelInterop = new WeakMap();var cacheNodeInterop = new WeakMap();return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {return nodeInterop ? cacheNodeInterop : cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj, nodeInterop) {if (!nodeInterop && obj && obj.__esModule) {return obj;}if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {return { "default": obj };}var cache = _getRequireWildcardCache(nodeInterop);if (cache && cache.has(obj)) {return cache.get(obj);}var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}newObj["default"] = obj;if (cache) {cache.set(obj, newObj);}return newObj;}
var MySQLStore = require("express-mysql-session")(_expressSession["default"]);


var sessionStore = new MySQLStore(_config["default"].mysql);








var app = (0, _express["default"])();

/**
 * Parses incoming request body as json if header indicates application/json
 */
app.use(_express["default"].json());

/**
 * Enables incoming requests from cross origin domains
 */
app.use((0, _cors["default"])({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true }));

app.use(_bodyParser["default"].urlencoded({ extended: true }));

/**
 * Creates express session and stores data in MySQLStore
 */
app.use((0, _expressSession["default"])({
  key: "userId",
  secret: process.env.SESSION_SECRET,
  resave: false,
  store: sessionStore,
  saveUninitialized: false,
  cookie: {
    maxAge: 86400,
    path: '/' } }));



/**
 * Logs incoming request information to the dev console
 */
app.use((0, _morgan["default"])("dev"));

/**
 * Directs incoming static asset requests to the public folder
 */
app.use(_express["default"]["static"]((0, _path.join)(__dirname, "../client/build")));

/**
 * Directs all routes starting with /api to the top level api express router
 */
app.use("/api", _routes["default"]);

/**
 * Directs all routes starting with /register to the top level register express router
 */
app.use("/register", _register["default"]);

/**
 * Directs all routes starting with /login to the top level login express router
 */
app.use("/login", _login["default"]);

/**
 * Directs all routes starting with /todo to the top level todo express router
 */
app.use("/todo", _todo["default"]);
/**
 * Sends the react app index.html for page requests
 * Only needed in production when you are not using the react dev server
 */
app.use(function (req, res, next) {
  try {
    res.sendFile((0, _path.join)(__dirname, "../client/build/index.html"));
  } catch (error) {
    next(error);
  }
});

/**
 * Error handler middleware
 */
app.use(_errorHandler.errorHandler);

/**
 * Bind the app to a specified port
 * You can access your app at http://localhost:<port>
 */
app.listen(_config["default"].port || 8080, function () {return (
    console.log("Server listening on port ".concat(_config["default"].port, "...")));});
//# sourceMappingURL=server.js.map