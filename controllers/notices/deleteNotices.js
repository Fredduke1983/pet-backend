const HttpError = require("../../utils/HttpError");
const Notice = require("../../models/noticesSchema");

const deleteNotices = async (req, res) => {
  const { id } = req.params;
  const notices = await Notice.findByIdAndRemove(id);
  if (!notices) {
    // res.json({
    //   message: "Notite not found!!! "})

    throw HttpError(404, "Not found");
  }
  res.json({
    message: "Notice deleted",
  });
};

module.exports = deleteNotices;
