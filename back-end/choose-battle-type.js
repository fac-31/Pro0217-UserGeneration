import battle from "./battle-type1";

require("./battle-type1");

export default function chooseBattleType(data) {
	let battleType;

	switch (data.selectedWeapon) {
		case "KittyLitterLauncher":
			battleType = charisma;
			break;
		case "DogTreatCatapult":
			battleType = wisdom;
			break;
		case "noisymegaphone":
			battleType = empathy;
			break;
	}
	battle(battleType);
}
