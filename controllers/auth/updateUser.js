const fs = require("fs").promises;
const cloudinary = require("cloudinary").v2;
const { HttpError } = require("../../utils");
const { User } = require("../../models/userSchema");

const updateUser = async (req, res) => {
  const { CLOUDE_NAME, API_KEY, API_SECRET } = process.env;
  cloudinary.config({
    cloud_name: CLOUDE_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET,
  });

  const objBody = { ...req.body };
  const objFile = { ...req.file };

  let newLinkToAvatar = req.user.avatar != null ? req.user.avatar : null;

  if (!Object.keys(objBody).length && !Object.keys(objFile).length) {
    throw HttpError(400, "No data");
  }

  const currentUserId = req.user.id;

  const currentUser = await User.findById(currentUserId);

  const { id } = currentUser;
  const { file = null } = req;

  if (file) {
    const { path } = file;

    const uploadOptions = {
      public_id: `avatarUser${id}`,
      width: 182,
      height: 182,
      gravity: "auto",
      crop: "fill",
    };

    await cloudinary.uploader.upload(path, uploadOptions, (error, result) => {
      if (error) {
        HttpError(400, "Uploads error");
      } else {
        newLinkToAvatar = result.url;
        console.log("The file has been successfully uploaded to Cloudinary:");
      }
    });
    await fs.unlink(path);
  }

  const userUpdate = await User.findOneAndUpdate(
    { _id: id },
    { ...req.body, avatar: newLinkToAvatar },
    {
      new: true,
    }
  );

  res.status(200).json(userUpdate);
};

module.exports = updateUser;
