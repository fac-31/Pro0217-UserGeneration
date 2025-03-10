const express = require("express");
const router = express.Router();
const controllersCharacters = require("../controllers/controllers-characters.js");
//const controllersWeapons = require("../controllers/controllers-weapons.js");

router.get("/characters", controllersCharacters.sendCharacter);
router.post("/characters", controllersCharacters.saveCharacter);
{
	console.log("we get to here at least");
}

//router.get("/save-weapon", controllersWeapons.sendWeapon);
//router.post("/save-weapon", controllersWeapons.saveWeapon);

module.exports = router;
