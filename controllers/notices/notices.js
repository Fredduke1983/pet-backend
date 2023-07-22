const { HttpError } = require("../../utils/HttpError");
const Notice = require("../../models/noticesSchema");

const getAllNotices = async (req, res) => {
  const notices = await Notice.find();

  if (!notices) {
    throw HttpError(404);
  }

  res.status(200).json(notices);
};

const getNoticesWithSearchParams = async (req, res) => {
  const { word, category } = req.query;

  try {
    const query = {};

    if (word && category) {
      query.title = { $regex: word, $options: "i" };
      query.category = category;
    } else if (word) {
      query.title = { $regex: word, $options: "i" };
    } else if (category) {
      query.category = category;
    }

    const notices = await Notice.find(query);

    if (notices.length === 0) {
      return res.status(404).json({ error: "Notices not found" });
    }
    res.status(200).json(notices);
  } catch (error) {
    throw HttpError(500, "Server failed");
  }
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
  const { _id: owner } = req.user;

  const notice = await Notice.create({ ...req.body, owner });

  res.status(200).json(notice);
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
  getNoticesWithSearchParams,
};
