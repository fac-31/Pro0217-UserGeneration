
const intruder = require("../controllers/logic-intruder-selection.js");
const currentUser = require("../controllers/logic-current-user.js");
const chooseBattleType = require("../controllers/logic-battle-type.js");

async function battle() {
    console.log("start logic-winner.js");

    const character1 = await currentUser();
    const character2 = await intruder();
    const battleType = await chooseBattleType();

    console.log("Battle - precheck - Character 1:", character1.currentUser.userId);
    console.log("Battle - precheck - Character 2:", character2.selectedCharacter.userId);
    console.log("Battle - precheck - Type:", battleType);

    try {
        // Check if character1 and character2 are valid and properly structured
        if (!character1?.currentUser || !character2?.selectedCharacter) {
            console.log("Invalid character data");
            return;
        }

        // Compare battleType to determine the winner
        if (character1.currentUser.name === "Tortoise") {
            setWinner(character1.currentUser, character2.selectedCharacter);
        } else if (character1.currentUser.name === "Hare") {
            setWinner(character2.selectedCharacter, character1.currentUser);
        } else if (character1.currentUser[battleType] === character2.selectedCharacter[battleType]) {
            drawlogic();
        } else if (character1.currentUser[battleType] < character2.selectedCharacter[battleType]) {
            setWinner(character2.selectedCharacter, character1.currentUser);
        } else if (character1.currentUser[battleType] > character2.selectedCharacter[battleType]) {
            setWinner(character1.currentUser, character2.selectedCharacter);
        }

        // Handle the draw logic based on Empathy
        function drawlogic() {
            if (character1.currentUser.Empathy < character2.selectedCharacter.Empathy) {
                setWinner(character2.selectedCharacter, character1.currentUser);
            } else {
                setWinner(character1.currentUser, character2.selectedCharacter);
            }
        }

        // Function to set the winner and loser
        function setWinner(winner, loser) {
            console.log("comparison of stats has been completed. the battle was based on", battleType);
            console.log("Winner:", winner.name, 
                "Weapon:", winner.weapon,
                "Empathy:", winner.Empathy);
            console.log("Loser:", loser.name, 
                "Weapon:", loser.weapon, 
                "BattleType:", loser[battleType], 
                "Empathy:", loser.Empathy);

            return {
                winner: {
                    name: winner.name,
                    weapon: winner.weapon,
                    empathy: winner.Empathy,
                },
                loser: {
                    name: loser.name,
                    weapon: loser.weapon,
                    empathy: loser.Empathy,
                },
                battleType: battleType,
            };
        }


    } catch (error) {
        console.error("Error getting a winner:", error);
        return null;
    }
}


module.exports = battle;
