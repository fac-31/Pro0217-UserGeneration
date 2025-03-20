// NC - Test index file that imports everything related to the battle 
// NC - starts the intruder selection function and passes the selected fighters to battle type
// NC - choose battle type selects what stat comparisons, this is affected by weapon choice type made by user
// NC - runs the battle function which generates a winner and looser 
// NC - passes object with winner loser to the generate battle tale - this calls OpenAI to create a story

const chooseBattleType = require("../controllers/logic-battle-type");
const battle = require("../controllers/logic-winner.js");
const generateBattleTale = require("../openAi-calls/generate-battle-tale");
const getCurrentUser = require("../controllers/logic-current-user");


exports.runBattleAndGenerateStory = async (req, res) => {

    try {
 //NC - Get the current user and their weapon selection from characterArray.json
        const { currentUser } = await getCurrentUser();

        console.log(`Saved weapon has been extracted: ${currentUser.weapon}`);

//NC - choose the battle type based on extracted user weapon
        const battleType = await chooseBattleType(currentUser.weapon);  
        console.log("Battle is a comparison of:", battleType);

//NC - run battle logic to select winner
        const battleResult = await battle(battleType); 
        console.log("Battle Result:", battleResult);

        if (!battleResult) {
            throw new Error("Battle failed.");
        }
//NC - generate story with openAI call based on the result
        const { winner, loser } = battleResult;
        console.log("Battle result:", winner.name, "vs", loser.name);

        console.log("generate story succesful");
        const battleStory = await generateBattleTale(winner, loser, battleType);

//NC - Story sent to front end
        res.json({ battleStory, winner, loser });

    } catch (error) {
        console.error("Error generating story:", error);
        res.status(500).json({ message: "Error generating battle story." });
    }
}
