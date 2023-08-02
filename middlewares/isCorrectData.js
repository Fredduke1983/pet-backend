const { HttpError } = require("../utils");

const isCorrectData = (req, res, next) => {
  const { category, name, type, comments } = req.body;
  if (category && name && type && comments) return next();

  throw HttpError(400, "Fields CATEGORY, NAME, TYPE and COMMENTS are required");
};

module.exports = isCorrectData;
