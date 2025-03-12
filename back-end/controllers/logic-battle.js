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
        // Step 1: Get the current user and their weapon selection (already saved)
        const { currentUser } = await getCurrentUser();

        console.log(`Saved weapon has been extracted: ${currentUser.weapon}`);

        // Step 2: Determine the battle type based on the saved weapon
        const battleType = await chooseBattleType(currentUser.weapon);  // Pass weapon to battle type logic
        console.log("Battle is a comparison of:", battleType);

        // Step 3: Run the battle logic to determine the winner and loser
        const battleResult = await battle(battleType); 
        console.log("Battle Result:", battleResult);

        if (!battleResult) {
            throw new Error("Battle failed.");
        }

        const { winner, loser } = battleResult;
        console.log("Battle result:", winner.name, "vs", loser.name);

        // Step 4: Generate the battle story based on the winner, loser, and battle type
        const battleStory = await generateBattleTale(winner, loser, battleType);
        console.log("Generated Battle Story:", battleStory);

        // Step 5: Send the battle story back to the frontend
        res.json({ battleStory });

    } catch (error) {
        console.error("Error generating story:", error);
        res.status(500).json({ message: "Error generating battle story." });
    }
}
