const jwt = require("jsonwebtoken");

const verifyMiddleware = (req, res, next) => {
  try {
    const payload = jwt.verify(req.cookies[USER_DETAILS]);
    res.locals = payload;
    return next();
  } catch (error) {
    console.log(error);
    return res.status(400).send("Unauthorized request");
  }
};

module.exports = verifyMiddleware;
