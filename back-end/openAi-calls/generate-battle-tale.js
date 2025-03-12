const { OpenAI } = require("openai");
const chooseBattleType = require("../controllers/logic-battle-type");
const client = new OpenAI({ apiKey: process.env.OPEN_AI_KEY });

async function generateBattleTale(winner, loser) {
    console.log("Writing the epic tale...");

    try {
        let prompt;
        const battleType = await chooseBattleType();
        


        if (winner && loser && battleType) {
            prompt = `
                Imagine you are J.R.R. Tolkien or G.R.R. Martin. 
                Create an epic battle tale between ${winner.name} and ${loser.name}, focusing on their ${battleType}.
                All of this is happening with a living room. 
                ${winner.name} uses their weapon, the ${winner.weapon}, to battle ${loser.name} who wields a ${loser.weapon}.
                The tale should incorporate details of their Empathy scores, where ${winner.name}'s Empathy is ${winner.Empathy} and ${loser.name}'s Empathy is ${loser.Empathy}.
                Their story unfolds in a battle filled with drama and courage, with twists that reflect their strengths and weaknesses.
                The story should be at least 100 words long.
            `;
        } else {
            throw new Error("Winner, loser, or battle type is missing.");
        }

        // Call OpenAI API to generate the battle tale
        const battleTale = await client.chat.completions.create({
            model: "gpt-4o-2024-08-06", 
            messages: [
                { 
                    role: "user",
                    content: prompt
                },
            ],
        });

        console.log("OpenAI battle tale:", JSON.stringify(battleTale, null, 2));
        
        // Extract the story from the response
        const story = battleTale.choices[0].message.content;
        console.log("Generated Battle Story:", story);

        return story;

    } catch (error) {
        console.error("Error creating the battle story:", error);
        return null;
    }
}

module.exports = generateBattleTale;
