const ctrlWrapper = require("../../utils/ctrlWrapper");

const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const currentUser = require("./currentUser");
const updateUser = require("./updateUser");
const getUserById = require("./getUserById");

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  logout: ctrlWrapper(logout),
  currentUser: ctrlWrapper(currentUser),
  updateUser: ctrlWrapper(updateUser),
  getUserById: ctrlWrapper(getUserById),
};
