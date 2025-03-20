const { OpenAI } = require("openai");
const chooseBattleType = require("../controllers/logic-battle-type");
const client = new OpenAI({ apiKey: process.env.OPEN_AI_KEY });

async function generateBattleTale(winner, loser) {
    console.log("Writing the epic tale...");

    try {
        let prompt;
        const battleType = await chooseBattleType();
        
        if (winner && loser && battleType) {
            prompt = `"You are a children's book writer who specializes in spy novels. Write a short spy face-off in a living room. Use ${winner.floor_thoughts} to help set the scene. ${winner.name} fights ${loser.name} with ${winner.weapon} against ${loser.weapon}. Compare the opponents' ${battleType}. Keep the tone light and funny, but easy to understand. Use ${winner.name}'s biography (${winner.biography}) to add the winners personality to the story. ${winner.name} always wins. Keep the battle under 125 words, using short, simple sentences. If no name is entered for either character, create one. End by saying who won the face-off. Correct any grammatical errors and split any words that are joined without spaces."`;
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
