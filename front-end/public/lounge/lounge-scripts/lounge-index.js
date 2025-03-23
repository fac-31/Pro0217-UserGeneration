import fetchData from "./lounge-fetch-character.js";
import BuildCharacter from "./lounge-display-character.js";
//import displayImage from "./lounge-fetch-background.js";
import { triggerBattle, formatBattleData } from "./lounge-weapon-update.js";

import { content } from "./lounge-content.js";
import formatEvents from "../../index/format-events.js";
import { winnerlosercheck } from "./lounge-winner-loser-check.js";

const contents = [
	content.loungeIntro1,
	content.intruderAlert,
	content.pickWeapon,
];
const weaponData = {};

async function callFunctions() {
	await fetchData().then((res) => {
		const background = document.getElementById("loungeMainContent");
		const img = new Image();
		img.src = res.url;
		background.style.backgroundImage = `url(${res.url})`;

		img.onload = () => {
			let user = new BuildCharacter("characterCanvas", res);
			user.draw();

			const loungeContainer = document.getElementById("loungeContainer");
			loungeContainer.classList.add("fade-in");
			setTimeout(() => {
				formatEvents(contents, weaponData, displayBattle, dummyFunction);
			}, 2000);
		};
	});
}
callFunctions();

function dummyFunction(something) {
	something = something;
}

async function displayBattle(data) {
	console.log(data);
	//let intruder = new BuildCharacter("intruderCanvas",)
	const battleData = await triggerBattle(data.weapon);
	const battleContent = formatBattleData(battleData);
	if (battleContent) {
		formatEvents(battleContent, "", () => end(battleData.loser), dummyFunction);
	}
}

function end(loser) {
	console.log("processing loser information:", loser);
	winnerlosercheck(loser);
}
