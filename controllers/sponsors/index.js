const ctrlWrapper = require("../../utils/ctrlWrapper");

const getAllSponsors = require("./getAllSponsors");

module.exports = {
  getAllSponsors: ctrlWrapper(getAllSponsors),
};
