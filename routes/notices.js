const express = require("express");
const { authenticate, uploadFile } = require("../middlewares");
const ctrl = require("../controllers/notices");

const router = express.Router();

router.get("/getall", ctrl.getAllNotices);
router.get("/noticesuser", authenticate, ctrl.getNoticesUser);
router.get("/search", ctrl.getNoticesWithSearchParams);
router.get("/:id", ctrl.getById);

router.post("/add", authenticate, uploadFile(), ctrl.addNotices);

router.delete("/delnotice/:id", authenticate, ctrl.deleteNotices);
router.delete("/delpet/:id", authenticate, ctrl.deletePet);

router.patch("/favorite/:id", authenticate, ctrl.updateFavorite);
router.patch("/favoritedelete/:id", authenticate, ctrl.favoriteDelete);
router.patch("/:id", ctrl.updateNotices);

module.exports = router;
