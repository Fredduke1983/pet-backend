const HttpError = require("../../utils/HttpError");
const { User } = require("../../models/userSchema");
const Notice = require("../../models/noticesSchema");

const updateFavorite = async (req, res) => {
  const { id } = req.params;
  const { _id } = req.user;

  const user = await User.findById(_id);

  const updatedFavorites = [...user.favorites, id];

  const updateUserFavoriteArray = await User.findByIdAndUpdate(
    _id,
    { favorites: updatedFavorites },
    { new: true }
  );

  //   const notice = await Notice.findByIdAndUpdate(id, { favorite: true });
  if (!updateUserFavoriteArray) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(updateUserFavoriteArray);
};

module.exports = updateFavorite;
