const Notice = require("../../models/noticesSchema");


const getNoticesUser = async (req, res) => {
  const { _id } = req.user;

  const getNotices = await Notice.find({ owner: _id });
  res.status(200).json(getNotices);
};

module.exports = getNoticesUser;
