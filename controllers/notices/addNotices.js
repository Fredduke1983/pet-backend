const Notice = require("../../models/noticesSchema");
const { User } = require("../../models/userSchema");
const { HttpError, imgHandler } = require("../../utils");

const addNotices = async (req, res) => {
  const objBody = { ...req.body };
  const objFile = { ...req.file };
  const { category } = req.body;

  const newLinkToAvatar = req.user.avatar != null ? req.user.avatar : null;

  if (!Object.keys(objBody).length && !Object.keys(objFile).length) {
    throw HttpError(400, "No data");
  }

  const currentUserId = req.user.id;
  const { file = null } = req;

  if (file) {
    await imgHandler(file, newLinkToAvatar);
  }

  if (category === "your pet") {
    const userCard = await User.findById(currentUserId);

    const updatedPets = [...userCard.pets, req.body];

    await User.findByIdAndUpdate(
      currentUserId,
      { pets: updatedPets },
      { new: true }
    );

    res.status(200).json({
      updatedPets,
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
