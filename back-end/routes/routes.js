const express = require('express');
const router = express.router();
const controllersCharacters = require ('./Back-end/controllers/controllers-characters.js');
const controllersWeapons = require ('./Back-end/controllers/controllers-weapons.js')

router.get('/characters', controllersCharacters.sendCharacter)
router.post('/characters', controllersCharacters.saveCharacter)

router.get('/save-weapon', controllersWeapons.sendWeapon)
router.post('/save-weapon', controllersWeapons.saveWeapon)

