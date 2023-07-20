const { User } = require("../../models/userSchema");

const logout = async (req, res) => {
    const { _id } = req.user;
    console.log(_id)
  await User.findByIdAndUpdate(_id, { token: "" });

  res.json({
    message: `User with ${_id} loged out`,
  });
};

module.exports = logout;
