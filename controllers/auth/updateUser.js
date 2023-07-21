const pathLib = require("path");
const fs = require("fs").promises;
const jimp = require("jimp");

const { ctrlWrapper, formatDate } = require("../../utils");
const { User } = require("../../models/userSchema");

const updateUser = ctrlWrapper(async (req, res) => {
  const destination = pathLib.join(__dirname, "..", "..", "public", "avatars");

  const { id } = req.params;

  const user = await User.findById(id);

  if (req.file) {
    const { id, name } = user;
    const { file } = req;
    const { path } = file;

    const img = await jimp.read(path);
    img.autocrop().cover(250, 250).writeAsync(path);

    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);
    const newName = `${name.toLowerCase()}${formattedDate}.jpg`;

    const newLinkToAvatar = pathLib.join(destination, newName);

    await fs.rename(path, newLinkToAvatar);

    const userUpdate = await User.findOneAndUpdate(
      { _id: id },
      { avatarUser: newLinkToAvatar },

      { ...req.body },
      {
        new: true,
      }
    );
    res.status(200).json({
      userUpdate,
      petsLenght: userUpdate.pets.length,
    });
    return;
  }

  res.status(400).json({
    message: "Something wrong...",
  });
});

module.exports = updateUser;
