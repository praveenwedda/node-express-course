const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "john") {
    req.user = { name: "john", id: 5 };
    next();
  } else {
    res.status(401).send("Unauthorized");
    console.log(req.user);
  }
  next();
};

module.exports = authorize;
