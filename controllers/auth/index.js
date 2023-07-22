const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const currentUser = require("./currentUser");
const updateUser = require("./updateUser");
const getUserById = require("./getUserById");

module.exports = { register, login, logout, currentUser, updateUser, getUserById };
