const { OpenAI } = require("openai");
const chooseBattleType = require("../controllers/logic-battle-type");
const client = new OpenAI({ apiKey: process.env.OPEN_AI_KEY });

async function generateBattleTale(winner, loser) {
    console.log("Writing the epic tale...");

    try {
        let prompt;
        const battleType = await chooseBattleType();
        
        if (winner && loser && battleType) {
            prompt = `"You are a childrens book writer who specialises in spy novels. Write a spy faceoff in a living room, use the ${winner.floor_thoughts} to help set the scene in the room. ${winner.name} fights ${loser.name} using ${winner.weapon} against ${loser.weapon}. Compare the opponents ${battleType}. Keep the tone of the battle humorous and use aspects each of the ${winner.biography} and ${loser.biography} to help personalise the story, keep these aspects reevant to each character. ${winner.name} is always the winner of the face off. Keep the battle under 100 words and with short sentences. If no name is entered for either character, create a name. End the paragraph mentioning the winner of the face off. Correct an grammatical errors and split words without spaces."`;
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
