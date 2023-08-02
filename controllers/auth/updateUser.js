const { HttpError, imgHandler } = require("../../utils");
const { User } = require("../../models/userSchema");
const { DEFAULT_USER_IMG } = require("../../constants/constants");

const updateUser = async (req, res) => {
  const objBody = { ...req.body };
  const objFile = { ...req.file };

  let newLinkToAvatar = req.user.avatar != null ? req.user.avatar : null;

  if (!Object.keys(objBody).length && !Object.keys(objFile).length) {
    throw HttpError(400, "No data");
  }

  const currentUserId = req.user.id;

  const currentUser = await User.findById(currentUserId);

  const { id } = currentUser;
  const { file = null } = req;
  if (file) {
    newLinkToAvatar = await imgHandler(file, newLinkToAvatar);
  } else {
    newLinkToAvatar = DEFAULT_USER_IMG;
  }

  const userUpdate = await User.findOneAndUpdate(
    { _id: id },
    { ...req.body, avatar: newLinkToAvatar },
    {
      new: true,
    }
  ).select("-password");

  res.status(200).json(userUpdate);
};

module.exports = updateUser;
