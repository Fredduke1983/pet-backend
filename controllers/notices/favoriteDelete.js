const HttpError = require("../../utils/HttpError");
const Notice = require("../../models/noticesSchema");

const updateFavoriteDelete = async (req, res) => {
  const { id } = req.params;
  const { _id } = req.user;

  const user = await User.findById(_id);

  const updatedFavorites = user.favorites.filter((favId) => favId !== id);

  const updateUserFavoriteArray = await User.findByIdAndUpdate(
    _id,
    { favorites: updatedFavorites },
    { new: true }
  );

  res.status(200).json(updateUserFavoriteArray);
};

module.exports = updateFavoriteDelete;
