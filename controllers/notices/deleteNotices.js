const HttpError = require("../../utils/HttpError");
const Notice = require("../../models/noticesSchema");

const deleteNotices = async (req, res) => {
  const { id: idParams  } = req.params;
  const { _id: idCurrentUser } = req.user;
  const notice = await Notice.findById(idParams);

  if (!notice.owner) {
    throw HttpError(404, "That notice haven't owner");
  }
  if (notice.owner.toString() === idCurrentUser.toString()) {
    await Notice.findByIdAndRemove(idParams);
  } else {
    throw HttpError(401, "You do not have access to delete this notice");
  }

  res.json(idParams);
};

module.exports = deleteNotices;
