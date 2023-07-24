const HttpError = require("../../utils/HttpError");
const News = require("../../models/newsSchema");

const getAllNews = async (req, res) => {
  const news = await News.find();

  if (!news) {
    throw HttpError(404);
  }

  res.status(200).json(news);
};

module.exports = getAllNews;
