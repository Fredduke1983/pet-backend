const authenticate = require("./authenticate");
const isCorrectData = require("./isCorrectData");
const uploadFile = require("./uploadFile");
const { uniqueUserValidate, isEmailExist } = require("./userMiddlewares");
const validateId = require("./validateId");

module.exports = {
  authenticate,
  uniqueUserValidate,
  isEmailExist,
  uploadFile,
  isCorrectData,
  validateId,
};
