const ctrlWrapper = require("../../utils/ctrlWrapper");

const getAllNews = require("./getAllNews");

module.exports = {
  getAllNews: ctrlWrapper(getAllNews),
};
