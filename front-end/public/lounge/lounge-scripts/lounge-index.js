import fetchData from "./lounge-fetch-character.js";
import BuildCharacter from "./lounge-display-character.js";
import displayImage from "./lounge-fetch-background.js";
import { triggerBattle, formatBattleData } from "./lounge-weapon-update.js";

import { intruderAlert, pickWeapon } from "./lounge-content.js";
import typeIntro from "../../index/intro.js";

async function callFunctions() {
	await fetchData().then((res) => {
		console.log(res);
		displayImage(res.url);
		let user = new BuildCharacter("characterCanvas", res);
		user.draw();
	});
}
callFunctions();

typeIntro(intruderAlert);
intruderAlert.events.forEach(({ id, event }) => {
	const element = document.getElementById(id);
	if (element) {
		element.addEventListener(event, () => {
			typeIntro(pickWeapon);
			listenForWeapon();
		});
	}
});

function listenForWeapon() {
	pickWeapon.events.forEach(({ id, event }) => {
		const element = document.getElementById(id);
		if (element) {
			element.addEventListener(event, () => {
				console.log("time to save weapon!", id);
				displayBattle(id);
			});
		}
	});
}

async function displayBattle(id) {
	//let intruder = new BuildCharacter("intruderCanvas",)
	const battleData = await triggerBattle(id);
	const battleContent = formatBattleData(battleData);
	typeIntro(battleContent);
	listenForEnd(battleContent);
}

function listenForEnd(battleContent) {
	battleContent.events.forEach(({ id, event }) => {
		const element = document.getElementById(id);
		if (element) {
			element.addEventListener(event, () => {
				console.log("I dunno man");
			});
		}
	});
}
