//NC - openai call that creates a story of the battle

//Initialise 
const { OpenAI } = require("openai");

const client = new OpenAI({
	apiKey: process.env.OPEN_AI_KEY,
});

async function generateBattleTale(winner, loser) {
    console.log("Writing the epic tale...");

    try {
        let prompt;

// If there's a winner, create the prompt for the battle story
        if (winner && loser) {
            prompt = `Imagine yourself as J.R.R. Tolkien or G.R.R. Martin. Create an epic hobby horse racing tale between ${winner.name} and ${loser.name}. This battle was based on their ${battleType}. The story should be at least 100 words long.`;
        } 

//NC - Send the prompt to OpenAI API for completion
            const battleTale = await client.chat.completions.create({
            model: "gpt-4o-2024-08-06", 
            messages: [
                { 
                    role: "user",
                    content: prompt
                },
            ],
        });

        console.log("OpenAi tale:", JSON.stringify(battleTale, null, 2));

//NC - Return the story from the response
        return battleTale.choices[0].message.content;

    } catch (error) {
        console.error("Error creating the battle story:", error);
        return null;
    }

}
    
console.log("the tale is written")

module.exports = generateBattleTale