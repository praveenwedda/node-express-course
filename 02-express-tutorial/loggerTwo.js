const loggerTwo = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date();
  console.log("Hey hey the stuff are --->", method, url, time);
  // res.send("Testing");
  next();
};

module.exports = loggerTwo;
