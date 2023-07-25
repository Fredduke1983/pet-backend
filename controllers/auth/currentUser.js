const { HttpError } = require("../../utils");

const currentUser = async (req, res) => {
  const user = req.user;

 if (!user) {
    throw HttpError(404, "User not found");
  }

  res.json({
    user
  });
};

module.exports = currentUser;
