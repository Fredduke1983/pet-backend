const { User } = require("../../models/userSchema");
const Notice = require("../../models/noticesSchema");

const getFavorites = async (req, res) => {
  const { _id } = req.user;

  const user = await User.findById(_id);
  const notices = await Notice.find();

  const favNotices = notices.filter((item) => user.favorites.includes(item.id));

  res.status(200).json({ length: favNotices.length, favNotices });
};

module.exports = getFavorites;
