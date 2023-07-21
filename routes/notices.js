const express = require("express");
const {
  getAllNotices,
  getById,
  addNotices,
  deleteNotices,
  updateNotices,
  updateFavorite,
} = require("../controllers/notices/notices");

const router = express.Router();

router.get("/getall", getAllNotices);
router.get("/:id", getById);
router.post("/", addNotices);
router.delete("/:id", deleteNotices);
router.patch("/:id", updateNotices);
router.patch("/favorite/:id", updateFavorite);

// router.patch("/", upload.single("avatar"), updatePets);

module.exports = router;
