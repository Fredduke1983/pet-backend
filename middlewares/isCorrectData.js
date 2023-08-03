const { HttpError } = require("../utils");

const isCorrectData = (req, res, next) => {
  const { category, name, type, comments } = req.body;

  if (category && name && type && comments) return next();

  const isCorrectCategory =
    category === "your pet" ||
    category === "sell" ||
    category === "lost/found" ||
    category === "in good hands";

  if (!isCorrectCategory)
    throw HttpError(
      400,
      "Field CATEGORY is required and must have 'your pet' or 'sell' or 'lost/found' or 'in good hands'"
    );

  throw HttpError(400, "Fields CATEGORY, NAME, TYPE and COMMENTS are required");
};

module.exports = isCorrectData;
