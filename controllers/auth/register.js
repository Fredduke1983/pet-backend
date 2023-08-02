const { User } = require("../../models/userSchema");
const bcrypt = require("bcrypt");
const { HttpError, userSignupValidator } = require("../../utils");

const register = async (req, res, next) => {
  const { password } = req.body;

  const { error } = userSignupValidator(req.body);

  if (error) {
    throw HttpError(409, `Wrong data`);
  }

  const hashPassword = await bcrypt.hash(password, 10);

  await User.create({ ...req.body, password: hashPassword });

  const newUser = await User.findOne({ email: req.body.email }).select("-password");

  res.status(201).json(newUser);
};

module.exports = register;
