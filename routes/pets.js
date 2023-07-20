const express = require("express");
const getAllPets = require("../controllers/pets/pets");

const router = express.Router();


router.get("/getall", getAllPets);

// router.patch("/", upload.single("avatar"), updatePets);

module.exports = router;
