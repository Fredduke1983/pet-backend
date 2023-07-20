const express = require("express");
const {signup, login} = require("../controllers/auth");

// const ctrlWrapper = require("../utils/ctrlWrapper");

// const { validateBody, authenicate } = require("../../middlewares");
// const { schemas } = require("../../models/user");
// const { User } = require("../models/userSchema");

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

// router.get(
//   "/current",
//   authenicate,
//   ctrl.getCurrent
// );

// router.post(
//   "/logout",
//   authenicate,
//   ctrl.logout
// );

module.exports = router;