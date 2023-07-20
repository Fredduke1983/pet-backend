const express = require("express");
const { register, login, logout, currentUser } = require("../controllers/auth");
const authenicate = require("../middlewares/authenicate");

// const ctrlWrapper = require("../utils/ctrlWrapper");

// const { validateBody, authenicate } = require("../../middlewares");
// const { schemas } = require("../../models/user");
// const { User } = require("../models/userSchema");

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.post(
  "/logout",
  authenicate,
  logout
);

router.get(
  "/current",
  authenicate,
  currentUser
);

module.exports = router;
