const jwt = require("jsonwebtoken");

const verifyMiddleware = (req, res, next) => {
  try {
    console.log(req.cookies);
    const payload = JSON.parse(req.cookies["USER_DETAILS"]);
    res.locals = payload;
    return next();
  } catch (error) {
    console.log(error);
    return res.status(400).send("Unauthorized request");
  }
};

module.exports = verifyMiddleware;
