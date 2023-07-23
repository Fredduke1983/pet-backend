const HttpError = require("../../utils/HttpError");
const Notice = require("../../models/noticesSchema");

const updateNotices = async (req, res) => {
  const { id } = req.params;
  const notices = await Notice.findByIdAndUpdate(id, req.body, { new: true });
  if (!notices) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(notices);
};

module.exports = updateNotices;
