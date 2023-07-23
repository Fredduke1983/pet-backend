const HttpError = require("../../utils/HttpError");
const Notice = require("../../models/noticesSchema");

const getAllNotices = async (req, res) => {
  const notices = await Notice.find();

  if (!notices) {
    throw HttpError(404);
  }

  res.status(200).json(notices);
};

module.exports = getAllNotices;
