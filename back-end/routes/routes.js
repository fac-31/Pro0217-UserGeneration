const express = require("express");
const router = express.Router();
const controllersCharacters = require("../controllers/controllers-characters.js");

router.get("/characters", controllersCharacters.sendCharacter);
router.post("/characters", controllersCharacters.saveCharacter);

//router.get("/save-weapon", controllersWeapons.sendWeapon);
//router.post("/save-weapon", controllersWeapons.saveWeapon);

module.exports = router;
