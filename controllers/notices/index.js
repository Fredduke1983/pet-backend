const ctrWrapper= require("../../utils/ctrlWrapper")

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
  getAllNotices:ctrWrapper(getAllNotices),
  getById:ctrWrapper(getById),
  getNoticesUser:ctrWrapper(getNoticesUser),
  getNoticesWithSearchParams:ctrWrapper(getNoticesWithSearchParams),
  addNotices:ctrWrapper(addNotices),
  deleteNotices:ctrWrapper(deleteNotices),
  updateNotices:ctrWrapper(updateNotices),
  updateFavorite:ctrWrapper(updateFavorite),
  favoriteDelete:ctrWrapper(favoriteDelete),
};
