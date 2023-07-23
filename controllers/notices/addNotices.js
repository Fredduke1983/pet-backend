const Notice = require("../../models/noticesSchema");

const addNotices = async (req, res) => {
  const { _id: owner } = req.user;

  const notice = await Notice.create({ ...req.body, owner });

  res.status(200).json(notice);
};

module.exports = addNotices;
