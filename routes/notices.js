const express = require("express");
const ctrl = require("../controllers/notices")
// const {
//   getAllNotices,
//   getById,
//   getNoticesUser,
//   getNoticesWithSearchParams,
//   addNotices,
//   deleteNotices,
//   updateNotices,
//   updateFavorite,
//   favoriteDelete,
// } = require("../controllers/notices");

const { authenticate } = require("../middlewares");

const router = express.Router();



router.get("/getall", ctrl.getAllNotices);
router.get("/noticesuser", authenticate, ctrl.getNoticesUser);
router.get("/search", ctrl.getNoticesWithSearchParams);
router.get("/:id", ctrl.getById);





router.post("/",authenticate, ctrl.addNotices);


router.delete("/delnotice/:id", authenticate, ctrl.deleteNotices);


router.patch("/favorite/:id", authenticate, ctrl.updateFavorite);
router.patch("/favoritedelete/:id", authenticate, ctrl.favoriteDelete);
router.patch("/:id", ctrl.updateNotices);


module.exports = router;

