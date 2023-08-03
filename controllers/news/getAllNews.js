const HttpError = require("../../utils/HttpError");
const News = require("../../models/newsSchema");
const { ctrlWrapper } = require("../../utils");

const getAllNews = ctrlWrapper(async (req, res) => {
  const { word = "", page = 1, limit = 6 } = req.query;

  const skip = (page - 1) * limit;

  try {
    const query = {};

    query.title = { $regex: word, $options: "i" };

    const news = await News.find(query).skip(skip).limit(limit);
    const allNews = await News.find(query);

    if (news.length === 0) {
      return res.status(200).json([]);
    }
    res.status(200).json({ length: allNews.length, news });
  } catch (error) {
    throw new HttpError(500, "Server failed");
  }
});

module.exports = getAllNews;
