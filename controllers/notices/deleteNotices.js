const HttpError = require("../../utils/HttpError");
const Notice = require("../../models/noticesSchema");

const deleteNotices = async (req, res) => {
  const { id } = req.params;
  const { _id } = req.user;
  const notice = await Notice.findById(id);

  console.log(notice.owner)
  console.log(_id)

  if (notice.owner.toString() === _id.toString()) {
    await Notice.findByIdAndRemove(id);
  } else {
    throw HttpError(401, "You do not have access to delete this notice");
  }

  res.json({
    message: "Notice deleted",
  });
};

module.exports = deleteNotices;
