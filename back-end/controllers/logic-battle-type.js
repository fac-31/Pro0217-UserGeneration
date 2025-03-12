//NC- module to pick weapon based on current users weapon entry

const getCurrentUser = require("./logic-current-user");


async function chooseBattleType() {
  try {
//NC- get the current user information
    const { currentUser } = await getCurrentUser(); 

    if (!currentUser) {
      return console.error("No current user found.");
    }

	console.log("Current UserId:", currentUser.userId);
	console.log("Current Username", currentUser.name);
    console.log("Weapon Selected:", currentUser.weapon);

    let battleType;
    switch (currentUser.weapon) { 
      case "KittyLitterLauncher":
        battleType = "Charisma";
        break;
      case "DogTreatCatapult":
        battleType = "Wisdom";
        break;
      case "noisymegaphone":
        battleType = "Empathy";
        break;
    }

    console.log("Chosen battle type:", battleType);
	return battleType;
    
  } catch (error) {
    console.error("Error in chooseBattleType:", error);
  }
}

module.exports = chooseBattleType;
