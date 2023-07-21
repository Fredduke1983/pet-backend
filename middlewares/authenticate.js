const jwt = require("jsonwebtoken");
const { User } = require("../models/userSchema");
const { HttpError, ctrlWrapper } = require("../utils");

const { SECRET_KEY } = process.env;

const authenticate = ctrlWrapper(async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer") {
    throw HttpError(401, "You do not have access to the database");
  }
  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);

    if (!user || !user.token || user.token !== token) {
      next(HttpError(401, "No such user, login or register"));
    }
    req.user = user;
    next();
  } catch (error) {
    next(HttpError(401, "Invalid token"));
  }
});

module.exports = authenticate;
