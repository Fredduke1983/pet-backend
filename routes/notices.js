const express = require("express");
const {
  authenticate,
  uploadFile,
  isCorrectData,
  validateId,
} = require("../middlewares");
const ctrl = require("../controllers/notices");

const router = express.Router();

router.get("/getall", ctrl.getAllNotices);
router.get("/noticesuser", authenticate, ctrl.getNoticesUser);
router.get("/search", ctrl.getNoticesWithSearchParams);
router.get("/getfavorites", authenticate, ctrl.getFavorites);
router.get("/:id", validateId, ctrl.getById);

router.post("/add", authenticate, uploadFile(), isCorrectData, ctrl.addNotices);

router.delete("/delnotice/:id", authenticate, ctrl.deleteNotices);
router.delete("/delpet/:id", authenticate, ctrl.deletePet);

router.patch("/favorite/:id", authenticate, ctrl.updateFavorite);
router.patch("/favoritedelete/:id", authenticate, ctrl.favoriteDelete);
router.patch("/:id", ctrl.updateNotices);

module.exports = router;
