const multer = require("multer");
const path = require("path");
const { ctrlWrapper, HttpError } = require("../utils");

const uploadFile = (req, res, next) => {
  const tempDir = path.join(__dirname, "..", "temp");
  const multerStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, tempDir);
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
  });

  const multerFilter = ctrlWrapper(async (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(HttpError(400, "Please, upload images only!"), false);
    }
  });

  const fileSizeLimit = { fileSize: 2 * 1024 * 1024 };

  return multer({
    storage: multerStorage,
    fileFilter: multerFilter,
    limits: fileSizeLimit,
  }).single("file");
};

module.exports = uploadFile;
