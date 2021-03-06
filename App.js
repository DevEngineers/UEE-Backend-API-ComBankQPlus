const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const billPaymentRouter = require("./routes/billPaymentRouter");
const notificationRouter = require("./routes/notificationRouter");
const billAccountRouter = require("./routes/billAccountRouter");
const ComplaintRouter = require("./routes/ComplaintRouter");
const SignupRouter = require("./routes/SignupRouter");
const LoginRouter = require("./routes/LoginRouter");
const ForgotPinRouter = require("./routes/ForgotPinRouter");
const CustomerProfile =require("./routes/CustomerProfileRoute");
const ChangePin =require("./routes/ChangerPinRouter");
const cardRouter =require("./routes/cardRouter");
const TransactionRouter =require("./routes/TransactionRouter");


const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();


/**
 * Connecting to MongoDB Server
 */
const connect = mongoose.connect(process.env.MONGODB_ATLAS_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

connect.then(
  (db) => {
      console.log("MongoDB Atlas connected with the server");
  },
  (err) => {
      console.log(err);
  }
);

const app = express();

app.use(cors());
/**
 * view engine setup
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/billPayment", billPaymentRouter);
app.use("/notification", notificationRouter);
app.use("/billAccount", billAccountRouter);
app.use("/card",cardRouter);
app.use("/transaction",TransactionRouter);
app.use("/complaints", ComplaintRouter);
app.use("/signup", SignupRouter);
app.use("/login", LoginRouter);
app.use("/forgotpin", ForgotPinRouter);
app.use("/profile", CustomerProfile);
app.use("/changepin", ChangePin);

/**
 * catch 404 and forward to error handler
 */
app.use(function (req, res, next) {
    next(createError(404));
});

/**
 * error handler
 */
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
    console.error(err);
});

module.exports = app;
