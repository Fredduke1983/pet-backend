const HttpError = require("../../utils/HttpError");
const Sponsors = require("../../models/sponsorsSchema");

const getAllSponsors = async (req, res) => {
  const sponsors = await Sponsors.find();

  if (!sponsors) {
    throw HttpError(404);
  }

  res.status(200).json(sponsors);
};

module.exports = getAllSponsors;
