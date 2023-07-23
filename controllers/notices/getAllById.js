const HttpError = require("../../utils/HttpError");
const Notice = require("../../models/noticesSchema");

const getById = async (req, res) => {
  const { id } = req.params;

  const notice = await Notice.findById(id);

  if (!notice) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json(notice);
};

module.exports = getById;
