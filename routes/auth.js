const express = require("express");
const {
  register,
  login,
  logout,
  currentUser,
  updateUser,
} = require("../controllers/auth");
const authenticate = require("../middlewares/authenticate");
const {
  uniqueUserValidate,
  isEmailExist,
  uploadFile,
} = require("../middlewares");

const router = express.Router();

router.post("/register", uniqueUserValidate, register);
router.post("/login", isEmailExist, login);
router.post("/logout", authenticate, logout);
router.get("/current", authenticate, currentUser);
router.patch("/:id", uploadFile(), updateUser);

module.exports = router;
