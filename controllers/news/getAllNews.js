const HttpError = require("../../utils/HttpError");
const News = require("../../models/newsSchema");

const getAllNews = async (req, res) => {
  const { word } = req.query;

  const { page = 1, limit = 6 } = req.query;
  const skip = (page - 1) * limit;

  try {
    const query = {};

    if (word) {
      query.title = { $regex: word, $options: "i" };

      const news = await News.find(query).skip(skip).limit(limit);

      if (news.length === 0) {
        return res.status(404).json({ error: "News not found" });
      }
      res.status(200).json(news);
    }
  } catch (error) {
    throw new HttpError(500, "Server failed");
  }

  // const news = await News.find(word).skip(skip).limit(limit);

  // if (news.length === 0) {
  //   return res.status(404).json({ error: "Notices not found" });
  // }

  // if (!news) {
  //   throw HttpError(404);
  // }

  // res.status(200).json(news);
};

module.exports = getAllNews;
