const authenticate = require("./authenticate");
const { uniqueUserValidate, isEmailExist } = require("./userMiddlewares");

module.exports = {
  authenticate,
  uniqueUserValidate,
  isEmailExist,
};
