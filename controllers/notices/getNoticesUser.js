const Notice = require("../../models/noticesSchema");
const { HttpError } = require("../../utils");

const getNoticesUser = async (req, res) => {
  const { _id: owner } = req.user;

  const getNotices = await Notice.find({ owner });
  if (!getNotices) {
    throw HttpError(404);
  }

  res.status(200).json(getNotices);
};

module.exports = getNoticesUser;
