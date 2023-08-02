const { User } = require("../../models/userSchema");

const updateFavoriteDelete = async (req, res) => {
  const { id: idParams } = req.params;
  const { _id: idUser } = req.user;

  const user = await User.findById(idUser);

  const updatedFavorites = user.favorites.filter((favId) => favId !== idParams);

  await User.findByIdAndUpdate(
    idUser,
    { favorites: updatedFavorites },
    { new: true }
  );

  res.status(200).json(idParams);
};

module.exports = updateFavoriteDelete;
