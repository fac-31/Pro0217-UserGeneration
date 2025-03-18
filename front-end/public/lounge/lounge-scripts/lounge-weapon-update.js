import { winnerlosercheck } from './lounge-winner-loser-check.js';

export async function triggerBattle(weaponId) {
	try {
		// NC - weapon choice is extracted and sent to the backend
		const selectedWeapon = weaponId;
		// NC - Send the weapon to the backend
		console.log("save weapon triggered");
		const response = await fetch("/save-weapon", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ weapon: selectedWeapon }),
		});

		// Check if the response was successful
		if (!response.ok) {
			throw new Error("Failed to save the weapon");
		}

		const data = await response.json(); // Get the response body as JSON

		// Log to console that the weapon was successfully saved
		console.log(`Weapon "${selectedWeapon}" has been successfully saved!`);

		// Trigger the battle logic right after the weapon has been saved
		console.log("battle triggered");
		const battleResponse = await fetch("/start-battle", {
			method: "GET",
		});

		// Check if the battle response is successful
		if (!battleResponse.ok) {
			throw new Error("Battle logic failed.");
		}

		const battleData = await battleResponse.json();
		const { winner, loser } = battleData;
		console.log("battle data:", battleData);

		setTimeout(() => {
			winnerlosercheck(loser); 
		}, 1000); // Adjust delay if necessary

		return battleData; // Return battle data for further use

	} catch (error) {
		console.error("Error:", error);
		document.getElementById("result").textContent =
			"There was an error selecting the weapon or starting the battle. Please try again.";
	}
}

export function formatBattleData(battleData) {
	const battleContent = [
		{
			string: battleData.battleStory,
			type: "select",
			pause: [],
			delay: 40,
			secondCall: true,
			events: [
				{
					id: "endButton",
					content: "What do we do now?",
					event: "click",
				},
			],
		},
	];
	return battleContent;
}
