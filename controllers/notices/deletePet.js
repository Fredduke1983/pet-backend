const HttpError = require("../../utils/HttpError");
const { User } = require("../../models/userSchema");
const { ctrlWrapper } = require("../../utils");

const deletePet = ctrlWrapper(async (req, res) => {
  const { id } = req.params;
  const { _id } = req.user;
  const user = await User.findById(_id);

  const isInclude = user.pets.some((pet) => pet._id.toString() === id);

  if (!isInclude) {
    throw HttpError(404, "Pet not excist");
  }
  const pets = user.pets.filter((pet) => pet.id !== id);

  await User.findByIdAndUpdate(_id, { pets }, { new: true });
  res.json(pets);
});

module.exports = deletePet;
