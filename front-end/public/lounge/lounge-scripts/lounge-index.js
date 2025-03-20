import fetchData from "./lounge-fetch-character.js";
import BuildCharacter from "./lounge-display-character.js";
import displayImage from "./lounge-fetch-background.js";
import { triggerBattle, formatBattleData } from "./lounge-weapon-update.js";

import { intruderAlert, pickWeapon} from "./lounge-content.js";
import formatEvents from "../../index/format-events.js";
import { winnerlosercheck } from "./lounge-winner-loser-check.js";

async function callFunctions() {
	await fetchData().then((res) => {
		console.log(res);
		displayImage(res.url);
		let user = new BuildCharacter("characterCanvas", res);
		user.draw();
	});
}
callFunctions();

const contents = [
	content.loungeIntro1,
	content.intruderAlert,
	content.pickWeapon,
];
const weaponData = {};
formatEvents(contents, weaponData, displayBattle);

async function displayBattle(data) {
	console.log(data);
	//let intruder = new BuildCharacter("intruderCanvas",)
	const battleData = await triggerBattle(data.weapon);
	const battleContent = formatBattleData(battleData);
	if (battleContent) {
		formatEvents(battleContent, "",() => end(battleData.loser));
	}
}

function end (loser) {
	console.log("processing loser information:", loser);
	winnerlosercheck(loser);
}