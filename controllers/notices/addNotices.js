const { DEFAULT_PET_IMG } = require("../../constants/constants");
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
  } else {
    newLinkToAvatar = DEFAULT_PET_IMG;
  }

  if (category === "your pet") {
    const userCard = await User.findById(currentUserId);

    const newPet = { ...req.body, imgUrl: newLinkToAvatar };

    const updatedPets = [...userCard.pets, newPet];

    await User.findByIdAndUpdate(
      currentUserId,
      { pets: updatedPets },
      { new: true }
    );

    res.status(200).json(newPet);
  } else if (
    category === "sell" ||
    category === "lost/found" ||
    category === "in good hands"
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
