const express = require("express");
const ctrl = require("../controllers/sponsors");

const router = express.Router();

router.get("/getall", ctrl.getAllSponsors);

module.exports = router;
