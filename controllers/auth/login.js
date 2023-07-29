const { User } = require("../../models/userSchema");
const { HttpError } = require("../../utils");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
const { userSigninValidator } = require("../../utils");
dotenv.config();

const { SECRET_KEY } = process.env;

const login = async (req, res, next) => {
  const { error } = userSigninValidator(req.body);

  if (error) {
    throw HttpError(409, "Wrong data");
  }
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  console.log(user);
  const { _id } = user;

  const passwordCompare = await bcrypt.compare(password, user.password);

  if (!passwordCompare) {
    throw HttpError(401, "Email or password is wrong");
  }

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "30d" });

  await User.findByIdAndUpdate(_id, { token });

  const updatedUser = await User.findById(_id);

  res.json(updatedUser);
};

module.exports = login;
