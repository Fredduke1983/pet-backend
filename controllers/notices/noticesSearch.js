const HttpError = require("../../utils/HttpError");
const Notice = require("../../models/noticesSchema");

const getNoticesWithSearchParams = async (req, res) => {
  const { word, category } = req.query;

  const { page = 1, limit = 3 } = req.query;
  const skip = (page - 1) * limit;

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

    const allNotices = await Notice.find(query);
    const notices = await Notice.find(query).skip(skip).limit(limit);

    if (notices.length === 0) {
      return res.status(404).json({});
    }

    res.status(200).json({ length: allNotices.length, notices });
  } catch (error) {
    throw new HttpError(500, "Server failed");
  }
};

module.exports = getNoticesWithSearchParams;
