const { default: mongoose } = require("mongoose");
const { HttpError } = require("../utils");

const validateId = (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw HttpError(400, "Invalid ID");
  }

  next();
};

module.exports = validateId;
