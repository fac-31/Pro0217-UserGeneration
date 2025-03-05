//NC - hobby horse race function
//NC - if the kitty litter launcher is detected a comparison between charisma is triggered

const intruder = require("./selecting-intruder");
const currentUser = require("./retrieve-user-saved-JSON.js");

async function hobbyHorseRace() {
    try {
        const character1 = await currentUser(); 
        const character2 = await intruder(); 

        let hobbyHorseWinner;

//Compare Charisma to determine the winner
        if (character1.Charisma > character2.Charisma) {
            hobbyHorseWinner = character1;
        } else if (character2.Charisma > character1.Charisma) {
            hobbyHorseWinner = character2;
        } else {
            hobbyHorseWinner = null;
        }

        if (hobbyHorseWinner){
            return {
                message:"Winner!",
                winner: hobbyHorseWinner
            }
            } else {
                return {
                    message: "draw!",
                    winner: null,
                }
            }
        }

        catch (error) {
        console.error("Error getting a winner:", error);
        return null; 
    }
}
module.exports = hobbyHorseRace;
