/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns
 */
const verifyMiddleware = (req, res, next) => {
  try {
    const payload = req.cookies["USER_DETAILS"];
    res.locals = { id: JSON.parse(payload).id };
    return next();
  } catch (error) {
    console.log(error);
    return res.status(400).send("Unauthorized request");
  }
};

module.exports = verifyMiddleware;
