const HttpError = require("../../utils/HttpError");
const { User } = require("../../models/userSchema");

const updateFavorite = async (req, res) => {
  const { id } = req.params;
  const { _id } = req.user;

  const user = await User.findById(_id);
  const isFavorite = user.favorites.find((el) => {
    return el === id;
  });

  if (isFavorite) {
    res.status(200).json(user);
  } else {
    const updatedFavorites = [...user.favorites, id];

    const updateUserFavoriteArray = await User.findByIdAndUpdate(
      _id,
      { favorites: updatedFavorites },
      { new: true }
    );

    if (!updateUserFavoriteArray) {
      throw HttpError(404, "Not found");
    }
    res.status(200).json(id);
  }
};

module.exports = updateFavorite;
