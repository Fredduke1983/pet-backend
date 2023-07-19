const { User } = require("../../models/userSchema");
const { HttpError } = require("../../utils/HttpError");
const bcrypt = require("bcrypt");

const signup = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({ ...req.body, password: hashPassword });

  res.status(201).json({ name: newUser.name, email: newUser.email });
};

module.exports = signup;
