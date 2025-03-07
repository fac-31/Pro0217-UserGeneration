const battle = require("./battle-type1");
const data = require("./characterData/3451.json"); //JM dummy data --> will later be passed as props

function chooseBattleType() {
	let battleType;
	switch (data.selectedWeapon) {
		case "KittyLitterLauncher":
			battleType = "Charisma";
			break;
		case "DogTreatCatapult":
			battleType = "Wisdom";
			break;
		case "noisymegaphone":
			battleType = "Empathy";
	}
	console.log("choose battle type:", battleType);
	battle(battleType);
}
chooseBattleType();
//module.exports = chooseBattleType;
