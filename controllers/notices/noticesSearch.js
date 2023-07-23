const HttpError = require("../../utils/HttpError");
const Notice = require("../../models/noticesSchema");

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

module.exports = getNoticesWithSearchParams;
