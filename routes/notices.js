const express = require("express");

const {
  getAllNotices,
  getById,
  getNoticesUser,
  getNoticesWithSearchParams,
  addNotices,
  deleteNotices,
  updateNotices,
  updateFavorite,
  favoriteDelete,
} = require("../controllers/notices");

const { authenticate } = require("../middlewares");

const router = express.Router();

router.get("/getall", getAllNotices);
router.get("/noticesuser", authenticate, getNoticesUser);
router.get("/search", getNoticesWithSearchParams);
router.get("/:id", getById);

router.post("/", addNotices);

router.delete("/delnotice/:id", authenticate, deleteNotices);

router.patch("/favorite/:id", authenticate, updateFavorite);
router.patch("/favoritedelete/:id", authenticate, favoriteDelete);
router.patch("/:id", updateNotices);

module.exports = router;
