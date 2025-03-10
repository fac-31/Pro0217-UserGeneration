//NC - hobby horse race function
//NC - if the kitty litter launcher is detected a comparison between charisma is triggered

//const intruder = require("./selecting-intruder.js");
//const currentUser = require("./retrieve-user-saved-JSON.js");

//JM dummy data
const character1 = require("../characterData/3451.json");
const character2 = require("../characterData/_character.json");

async function battle(battleType) {
	//const character1 = await currentUser();
	//const character2 = await intruder();

	try {
		//Compare Charisma to determine the winner
		if (character1.name === "Tortoise") {
			setWinner(character1, character2);
		} else if (character1.name === "Hare") {
			setWinner(character2, character1);
		} else if (character1[battleType] === character2[battleType]) {
			drawlogic();
		} else if (character1[battleType] < character2[battleType]) {
			setWinner(character2, character1);
		} else if (character1[battleType] > character2[battleType]) {
			setWinner(character1, character2);
		}
		
		//JM notes --> logic works if tortoise and hare cannot be selcted as the intruder
		//JM above code feels a bit noodly. Might be nice to rework later!

		function drawlogic() {
			if (character1[empathy] < character2[empathy]) {
				setWinner(character2, character1);
			} else {
				setWinner(character1, character2);
			}
		}

		function setWinner(winner, loser) {
			return {
				message: "Winner!",
				winner: {
					name: winner.name,
					battleType: winner[battleType],
					empathy: winner.Empathy,
				},
				loser: {
					name: loser.name,
					battleType: loser[battleType],
					empathy: loser.Empathy,
				},
			};
		}
	} catch (error) {
		console.error("Error getting a winner:", error);
		return null;
	}
}
module.exports = battle;
