const express = require("express");
const { register, login, logout, currentUser } = require("../controllers/auth");
const authenticate = require("../middlewares/authenticate");
const { uniqueUserValidate, isEmailExist } = require("../middlewares");

const router = express.Router();

router.post("/register", uniqueUserValidate, register);
router.post("/login", isEmailExist, login);
router.post("/logout", authenticate, logout);
router.get("/current", authenticate, currentUser);

module.exports = router;
