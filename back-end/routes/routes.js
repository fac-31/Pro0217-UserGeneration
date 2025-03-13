const express = require("express");
const router = express.Router();
const controllersCharacters = require("../controllers/controllers-characters.js");
const controllersWeapons = require("../controllers/controllers-weapons.js");
const controllersStartBattle = require("../controllers/logic-battle.js");



router.get("/characters", controllersCharacters.sendCharacter);
router.post("/characters", controllersCharacters.saveCharacter);

router.post("/save-weapon", controllersWeapons.saveWeapon);
router.get("/start-battle", (req, res, next) => {
    console.log("calling /start-battle endpoint");
    next();
}, controllersStartBattle.runBattleAndGenerateStory);


module.exports = router;
