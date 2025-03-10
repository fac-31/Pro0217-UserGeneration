// NC - Test index file that imports everything related to the battle 
// NC - starts the intruder selection function and passes the selected fighters to battle type
// NC - choose battle type selects what stat comparisons, this is affected by weapon choice type made by user
// NC - runs the battle function which generates a winner and looser 
// NC - passes object with winner loser to the generate battle tale - this calls OpenAI to create a story

const duelCharacters = require("./selecting-intruder");
const chooseBattleType = require("./choose-battle-type");
const battle = require("./battle-type1");
const generateBattleTale = require("./generate-battle-tale");


async function runBattleAndGenerateStory() {
    try {
//NC - Select random fighter first 
        const duelCharacters = await randomCharacterSelector();
        if (!duelCharacters) {
            throw new Error("Failed to select intruder.");
        }
//NC - 
        const battleType = await chooseBattleType(fighters.character1, fighters.character2);
        
//NC - Run the battle and get results
        const battleResult = await battle(battleType, fighters.character1, fighters.character2);
        if (!battleResult) {
            throw new Error("Battle failed.");
        }

        const { winner, loser } = battleResult;
        console.log("Battle result:", winner.name, "vs", loser.name);

        // Generate the battle story (No need to pass client)
        const battleStory = await generateBattleTale(winner, loser, battleType);
        console.log("Generated Battle Story:", battleStory);
    } catch (error) {
        console.error("Error generating story:", error);
    }
}

// Run the entire battle and story generation process
runBattleAndGenerateStory();