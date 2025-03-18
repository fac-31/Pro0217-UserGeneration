import fetchData from "./lounge-fetch-character.js";
import BuildCharacter from "./lounge-display-character.js";
import displayImage from "./lounge-fetch-background.js";
import { triggerBattle, formatBattleData } from "./lounge-weapon-update.js";


import { intruderAlert, pickWeapon } from "./lounge-content.js";
import formatEvents from "../../index/format-events.js";

async function callFunctions() {
	await fetchData().then((res) => {
		console.log(res);
		displayImage(res.url);
		let user = new BuildCharacter("characterCanvas", res);
		user.draw();
	});
}
callFunctions();

const contents = [intruderAlert, pickWeapon];
const weaponData = {};
formatEvents(contents, weaponData, displayBattle);

async function displayBattle(data) {
	console.log(data);
	//let intruder = new BuildCharacter("intruderCanvas",)
	const battleData = await triggerBattle(data.weapon);
	const battleContent = formatBattleData(battleData);
	if (battleContent) {
		formatEvents(battleContent, "");
	}
}


