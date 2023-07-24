const express = require("express");
const ctrl = require("../controllers/news");

const router = express.Router();

router.get("/getall",  ctrl.getAllNews);

module.exports = router;