const { User } = require("../models/userSchema");
const { HttpError, ctrlWrapper } = require("../utils");

const uniqueUserValidate = ctrlWrapper(async (req, res, next) => {
  const user = await User.findOne({ email: `${req.body.email}` });

  if (user) {
    throw HttpError(409, "Email already exists");
  }
  next();
});

const isEmailExist = ctrlWrapper(async (req, res, next) => {
  const user = await User.findOne({ email: `${req.body.email}` });

  if (!user) {
    throw HttpError(404, "Email not found");
  }
  next();
});

module.exports = { uniqueUserValidate, isEmailExist };
