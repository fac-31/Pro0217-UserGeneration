import { winnerlosercheck } from "./lounge-winner-loser-check.js";

export async function triggerBattle(weaponId) {
	try {
		console.log("save weapon triggered");

		// NC - weapon choice is extracted and sent to the backend
		const selectedWeapon = weaponId;
		const response = await fetch("/save-weapon", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ weapon: selectedWeapon }),
		});

		// Check if the response was successful
		if (!response.ok) {
			throw new Error("At triggerBattle(): Failed to save the weapon");
		} else {
			console.log(`Weapon "${selectedWeapon}" has been successfully saved!`);

			// Trigger the battle logic right after the weapon has been saved
			console.log("At triggerBattle(): Retrieving battle data");
			const battleResponse = await fetch("/start-battle", {
				method: "GET",
			});

			// Check if the battle response is successful
			if (!battleResponse.ok) {
				throw new Error("At trigger Battle(): Battle logic failed.");
			} else {
				const battleData = await battleResponse.json();
				console.log("battle data:", battleData);
				console.log("loser userId:", battleData.loser.userId);

				return battleData;
			}
		}
	} catch (error) {
		console.error("Error:", error);
		document.getElementById("result").textContent =
			"There was an error selecting the weapon or starting the battle. Please try again.";
	}
}

export function formatBattleData(battleData) {
	const battleContent = [
		{
			lounge: true,
			string: battleData.battleStory,
			type: "select",
			pause: [],
			delay: 40,
			secondCall: true,
			events: [
				{
					id: "endButton",
					content: "Next",
					event: "click",
					handler: "",
					onClick: () => {
						winnerlosercheck(battleData.loser);
					},
				},
			],
		},
	];
	return battleContent;
}
