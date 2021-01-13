const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;

dotenv.config();

const app = express();

/* Middleware */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(
  cors({
    origin: "http://localhost:3000", //  Need to change once we deploy the app
    credentials: true,
  })
);

app.get("/", (req, res) => {
  try {
    res.send("Welcome to first-dev-job server!");
  } catch (error) {
    res.status(404).send(error.message);
  }
});

/* Database connection */
mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected to database 🟢");
  })
  .catch((error) => {
    console.log("Could not connect to database 🔴");
  });

app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});
