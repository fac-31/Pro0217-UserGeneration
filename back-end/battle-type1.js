//NC - hobby horse race function
//NC - if the kitty litter launcher is detected a comparison between charisma is triggered

const intruder = require("./selecting-intruder.js");
const currentUser = require("./retrieve-user-saved-JSON.js");

async function battle(battleType) {
	const battleType = battleType;
	const character1 = await currentUser();
	const character2 = await intruder();

	let winner = character1;
	let loser = character2;

	try {
		//Compare Charisma to determine the winner
		if (character1.battleType === character2.battleType) {
			drawlogic();
		} else if (character1.battleType < character2.battleType) {
			winner = character2;
			loser = character1;
		}

		function drawlogic() {
			if (character1.empathy < character2.empathy) {
				winner = character2;
				loser = character1;
			}
		}

		if (winner) {
			return {
				message: "Winner!",
				winner: {
					name: winner.name,
					battleType: winner.battleType,
					empathy: winner.empathy,
				},
				loser: {
					name: loser.name,
					battleType: loser.battleType,
					empathy: loser.battle,
				},
			};
		}
	} catch (error) {
		console.error("Error getting a winner:", error);
		return null;
	}
}

battle();
module.exports = battle;
