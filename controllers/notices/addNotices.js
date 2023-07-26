const Notice = require("../../models/noticesSchema");
const { User } = require("../../models/userSchema");
const { HttpError, imgHandler } = require("../../utils");

const addNotices = async (req, res) => {
  const objBody = { ...req.body };
  const objFile = { ...req.file };
  const { category } = req.body;

  let newLinkToAvatar = req.user.avatar != null ? req.user.avatar : null;

  if (!Object.keys(objBody).length && !Object.keys(objFile).length) {
    throw HttpError(400, "No data");
  }

  const currentUserId = req.user.id;
  const { file = null } = req;

  if (file) {
    newLinkToAvatar = await imgHandler(file, newLinkToAvatar);
  }

  if (category === "your pet") {
    const userCard = await User.findById(currentUserId);

    const updatedPets = [
      ...userCard.pets,
      { ...req.body, avatar: newLinkToAvatar },
    ];

    const updatedUser = await User.findByIdAndUpdate(
      currentUserId,
      { pets: updatedPets },
      { new: true }
    );
    const { pets } = updatedUser;
    res.status(200).json({
      pets,
    });
  } else if (
    category === "sell" ||
    category === "lost" ||
    category === "good hands"
  ) {
    const addedNotice = await Notice.create({
      ...req.body,
      owner: currentUserId,
      imgUrl: newLinkToAvatar,
    });

    res.status(200).json({
      addedNotice,
    });
  }
};

module.exports = addNotices;
