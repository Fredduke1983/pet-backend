const { HttpError } = require("../../utils/HttpError");
const Notice = require("../../models/noticesSchema");

const getAllNotices = async (req, res) => {
  const notices = await Notice.find();

  if (!notices) {
    throw HttpError(404);
  }

  res.status(200).json(notices);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const notice = await Notice.findById(id);

  if (!notice) {
    throw HttpError(404, "Not found");
  }

  res.status(200).json(notice);
};

const addNotices = async (req, res) => {
  const notices = await Notice.create(req.body);

  res.status(200).json(notices);
};

const deleteNotices = async (req, res) => {
  const { id } = req.params;
  const notices = await Notice.findByIdAndRemove(id);
  if (!notices) {
    throw HttpError(404, "Not found");
  }
  res.json({
    message: "Contact deleted",
  });
};

const updateNotices = async (req, res) => {
  const { id } = req.params;
  const notices = await Notice.findByIdAndUpdate(id, req.body, { new: true });
  if (!notices) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(notices);
};

const updateFavorite = async (req, res) => {
  const { id } = req.params;
  const notices = await Notice.findByIdAndUpdate(id, req.body, { new: true });
  if (!notices) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(notices);
};

module.exports = {
  getAllNotices,
  getById,
  addNotices,
  deleteNotices,
  updateNotices,
  updateFavorite,
};
