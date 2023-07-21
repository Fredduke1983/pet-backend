const authenticate = require("./authenticate");
const uploadFile = require("./uploadFile");
const { uniqueUserValidate, isEmailExist } = require("./userMiddlewares");

module.exports = {
  authenticate,
  uniqueUserValidate,
  isEmailExist,
  uploadFile,
};
