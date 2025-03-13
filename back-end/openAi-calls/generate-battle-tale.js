const { OpenAI } = require("openai");
const chooseBattleType = require("../controllers/logic-battle-type");
const client = new OpenAI({ apiKey: process.env.OPEN_AI_KEY });

async function generateBattleTale(winner, loser) {
    console.log("Writing the epic tale...");

    try {
        let prompt;
        const battleType = await chooseBattleType();
        
        if (winner && loser && battleType) {
            prompt = `"Imagine you are J.R.R. Tolkien or G.R.R. Martin, but writing a humorous children's story. Create an epic yet funny battle between ${winner.name} and ${loser.name}, focusing on their ${battleType}. The setting of this battle is a living room, with a sofa, dining table, and various pictures on the wall. ${winner.name} uses their weapon, the ${winner.weapon}, to battle ${loser.name}, who wields a ${loser.weapon}. There should always be a winner in the battle. If no weapons are described, create whimsical weapons. The battle should be full of amusing slapstick accidents, include appearances from both characters pets, and be no more than 75 words long. If winner.name or loser.name are not provided, provide a name. If winner.weapon or loser.weapon are empty, create a weapon for the character. Keep the language grammatically correct, clear, and refined."`;
        } else {
            throw new Error("Winner, loser, or battle type is missing.");
        }

//NC - Call OpenAI API to generate the battle tale
        const battleTale = await client.chat.completions.create({
            model: "gpt-4o-2024-08-06", 
            messages: [
                { 
                    role: "user",
                    content: prompt
                },
            ],
        });
        
//NC- Extract the story from the response
        const story = battleTale.choices[0].message.content;
        console.log("Output from generate-battle-tale fucntion:", story);

        return story;

    } catch (error) {
        console.error("Error creating the battle story:", error);
        return null;
    }
}

module.exports = generateBattleTale;
