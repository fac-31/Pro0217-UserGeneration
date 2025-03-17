//NC - function to compare stats based on battle type

const intruder = require("../controllers/logic-intruder-selection.js");
const currentUser = require("../controllers/logic-current-user.js");
const chooseBattleType = require("../controllers/logic-battle-type.js");

async function battle() {
    console.log("start logic-winner.js");

    const character1 = await currentUser();
    const character2 = await intruder();
    const battleType = await chooseBattleType();

//NC- prefight check to ensure objects are valid
    console.log("Battle - precheck - Character 1:", character1.currentUser.userId);
    console.log("Battle - precheck - Character 2:", character2.selectedCharacter.userId);
    console.log("Battle - precheck - Type:", battleType);

    try {
        if (!character1?.currentUser || !character2?.selectedCharacter) {
            console.log("Invalid character data");
            return null;
        }

        let battleResult = null;

//NC - Comparison of stats to determine the winner
        if (character1.currentUser.name === "Tortoise") {
            battleResult = setWinner(character1.currentUser, character2.selectedCharacter);
        } else if (character1.currentUser.name === "Hare") {
            battleResult = setWinner(character2.selectedCharacter, character1.currentUser);
        } else if (character1.currentUser[battleType] === character2.selectedCharacter[battleType]) {
            battleResult = drawlogic();
        } else if (character1.currentUser[battleType] < character2.selectedCharacter[battleType]) {
            battleResult = setWinner(character2.selectedCharacter, character1.currentUser);
        } else if (character1.currentUser[battleType] > character2.selectedCharacter[battleType]) {
            battleResult = setWinner(character1.currentUser, character2.selectedCharacter);
        }


        function drawlogic() {
            if (character1.currentUser.Empathy < character2.selectedCharacter.Empathy) {
                return setWinner(character2.selectedCharacter, character1.currentUser);
            } else {
                return setWinner(character1.currentUser, character2.selectedCharacter);
            }
        }

//NC - set the winner and loser
        function setWinner(winner, loser) {
            console.log("comparison of stats has been completed. the battle was based on", battleType);
            console.log("Winner:", winner.name, 
                "biography", winner.biography,
                "Weapon:", winner.weapon,
                "Empathy:", winner.Empathy,
                "floor_thoughts:", winner.floor_thoughts);
            console.log("Loser:", loser.name, 
                "biography", loser.biography,
                "Weapon:", loser.weapon, 
                "Empathy:", loser.Empathy);

            return {
                winner: {
                    name: winner.name,
                    weapon: winner.weapon,
                    empathy: winner.Empathy,
                    biography: winner.biography,
                    floor_thoughts: winner.floor_thoughts,
                },
                loser: {
                    name: loser.name,
                    weapon: loser.weapon,
                    empathy: loser.Empathy,
                    biography: loser.biography,
                },
                battleType: battleType,
            };
        }

        if (!battleResult) {
            console.log("Error: No winner could be determined.");
            return null;
        }

        return battleResult;

    } catch (error) {
        console.error("Error getting a winner:", error);
        return null;
    }
}

module.exports = battle;
