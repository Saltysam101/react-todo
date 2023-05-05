import express, { application } from "express";
import morgan from "morgan";
import cors from "cors";
import apiRouter from "./routes";
import registerRouter from "./routes/register";
import loginRouter from "./routes/login";
import config from "./config";
import { errorHandler } from "./middlewares/errorHandler";
import { join } from "path";
import session from "express-session";
import bodyParser from "body-parser";
const MySQLStore = require("express-mysql-session")(session);
import cookieParser from "cookie-parser";


const sessionStore = new MySQLStore(config.mysql);








const app = express();

/**
 * Parses incoming request body as json if header indicates application/json
 */
app.use(express.json());

/**
 * Enables incoming requests from cross origin domains
 */
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));
/* app.use(cookieParser()); */
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    //key: "userId",
    secret: process.env.SESSION_SECRET,
    resave: false,
    store: sessionStore,
    saveUninitialized: false,
    cookie: {
        maxAge: 86400,
        /* sameSite: false,
        httpOnly: false,
        secure: false, */
        path: '/'
    }
}))

/**
 * Logs incoming request information to the dev console
 */
app.use(morgan("dev"));

/**
 * Directs incoming static asset requests to the public folder
 */
app.use(express.static(join(__dirname, "../client/build")));

/**
 * Directs all routes starting with /api to the top level api express router
 */
app.use("/api", apiRouter);

/**
 * Directs all routes starting with /register to the top level register express router
 */
app.use("/register", registerRouter);

/**
 * Directs all routes starting with /login to the top level login express router
 */
app.use("/login", loginRouter);
/**
 * Sends the react app index.html for page requests
 * Only needed in production when you are not using the react dev server
 */
app.use((req, res, next) => {
    try {
        res.sendFile(join(__dirname, "../client/build/index.html"));
    } catch (error) {
        next(error);
    }
});

/**
 * Error handler middleware
 */
app.use(errorHandler);

/**
 * Bind the app to a specified port
 * You can access your app at http://localhost:<port>
 */
app.listen(config.port || 8080, () =>
    console.log(`Server listening on port ${config.port}...`)
);