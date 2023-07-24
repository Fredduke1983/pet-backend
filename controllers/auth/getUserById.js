const { User } = require("../../models/userSchema");
const { HttpError } = require("../../utils");

const getUserById = async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id);

  if (!user) {
    throw HttpError(404, "User not found");
  }

  res.json(user);
};

module.exports = getUserById;
