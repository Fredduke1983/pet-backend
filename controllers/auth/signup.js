const { User } = require("../../models/userSchema");
const { HttpError } = require("../../utils/HttpError");
const bcrypt = require("bcrypt");
const fs = require("fs/promises");
const path = require("path");
// const ctrlWrapper = require("../../utils/ctrlWrapper");
const avatarsDir = path.join(__dirname, "../", "public", "avatars");

const signup = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({ ...req.body, password: hashPassword });

  res.status(201).json({ name: newUser.name, email: newUser.email });
};

const updatePets = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;
  const filename = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarsDir, filename);
  await fs.rename(tempUpload, resultUpload);
  await Jimp.read(resultUpload)
    .then((image) => {
      return image.resize(250, 250).write(resultUpload);
    })
    .catch((error) => {
      throw error;
    });
  const avatarURL = path.join("avatars", filename);
  await User.findByIdAndUpdate(_id, { avatarURL });

  res.status(200).json({
    avatarURL,
  });
};

module.exports = signup;
