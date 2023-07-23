const getAllNotices = require("./getAllNotices");
const getById = require("./getAllById");
const getNoticesUser = require("./getNoticesUser");
const getNoticesWithSearchParams = require("./noticesSearch");
const addNotices = require("./addNotices");
const deleteNotices = require("./deleteNotices");
const updateNotices = require("./updateNotices");
const updateFavorite = require("./updateFavorite");
const favoriteDelete = require("./favoriteDelete");

module.exports = {
  getAllNotices,
  getById,
  getNoticesUser,
  getNoticesWithSearchParams,
  addNotices,
  deleteNotices,
  updateNotices,
  updateFavorite,
  favoriteDelete,
};
