const express = require("express");
const router = express.Router();
const controllersCharacters = require("../controllers/controllers-characters.js");
const controllersWeapons = require("../controllers/controllers-weapons.js");
const controllersStartBattle = require("../controllers/logic-battle.js");
const controllersDeleteCharacter = require("../controllers/logic-delete-character.js")



router.get("/characters", controllersCharacters.sendCharacter);
router.post("/characters", controllersCharacters.saveCharacter);

router.post("/save-weapon", controllersWeapons.saveWeapon);

router.get("/start-battle", (req, res, next) => {
    console.log("calling /start-battle endpoint");
    next();
}, controllersStartBattle.runBattleAndGenerateStory);

router.delete("/delete-character", (req, res, next) => {
    console.log("calling /delete-character endpoint");
  next();
}, controllersDeleteCharacter.runDeleteCharacter);

module.exports = router;
