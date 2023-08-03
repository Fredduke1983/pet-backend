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
  const { file = null, user: userCard, body: reqBody } = req;

  if (file) {
    newLinkToAvatar = await imgHandler(file, newLinkToAvatar);
  } else {
    newLinkToAvatar = DEFAULT_PET_IMG;
  }

  if (category === "your pet") {
    const newPet = { ...reqBody, imgUrl: newLinkToAvatar };

    const updatedPets = [...userCard.pets, newPet];

    await User.findByIdAndUpdate(
      currentUserId,
      { pets: updatedPets },
      { new: true }
    ).select("-password");

    res.status(200).json(newPet);
  } else {
    const addedNotice = await Notice.create({
      ...reqBody,
      email: req.user.email,
      owner: currentUserId,
      imgUrl: newLinkToAvatar,
    });
    res.status(200).json({
      addedNotice,
    });
  }
};

module.exports = addNotices;
