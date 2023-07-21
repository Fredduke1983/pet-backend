const { User } = require("../../models/userSchema");
const bcrypt = require("bcrypt");
const { ctrlWrapper, HttpError, userSignupValidator } = require("../../utils");

const register = ctrlWrapper(async (req, res, next) => {
  const { password } = req.body;

  const { error, value } = userSignupValidator(req.body);

  if (error) {
    throw HttpError(409, `Wrong data`);
  }

  const hashPassword = await bcrypt.hash(password, 10);

  await User.create({ ...req.body, password: hashPassword });

  res.status(201).json({ ...value, password: hashPassword });
});

module.exports = register;
