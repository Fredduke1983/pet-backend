const { HttpError } = require("../../utils/HttpError");
const Pet = require("../../models/petSchema");

const getAllPets = async (req, res) => {
  const pet = await Pet.find();

  if (!pet) {
    throw HttpError(404);
  }

  res.status(200).json({ ...pet });
};

module.exports = getAllPets;
