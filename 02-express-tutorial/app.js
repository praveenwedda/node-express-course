console.log("Express Tutorial");

const express = require("express");
const app = express();
const logger = require("./logger");
const loggerTwo = require("./loggerTwo");
const authorize = require("./authorize");

app.use(logger, authorize);
// app.use("/api/", loggerTwo);

app.get("/", (req, res) => {
  res.send("home page");
});

app.get("/api/about", (req, res) => {
  res.send("about page");
});

app.get("/api/products", (req, res) => {
  res.send("products page");
});

app.listen(5000, () => {
  console.log("server listening to port 5000");
});
