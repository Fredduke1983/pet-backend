const express = require("express");
const ctrl = require("../controllers/auth");

const authenticate = require("../middlewares/authenticate");
const {
  uniqueUserValidate,
  isEmailExist,
  uploadFile,
} = require("../middlewares");

const router = express.Router();

router.post("/register", uniqueUserValidate, ctrl.register);

router.post("/login", isEmailExist, ctrl.login);
router.post("/logout", authenticate, ctrl.logout);
router.get("/current", authenticate, ctrl.currentUser);
router.patch("/update", authenticate, uploadFile(), ctrl.updateUser);
router.get("/:id", ctrl.getUserById);

module.exports = router;
