/* //NC - openai call that creates a story of the battle

async function generateBattleTale(client, winner, loser) {
    console.log("Writing the epic tale...");

    try {
        let prompt;

// If there's a winner, create the prompt for the battle story
        if (winner && loser) {
            prompt = `Imagine yourself as J.R.R. Tolkien or G.R.R. Martin. Create an epic hobby horse racing tale between ${winner.name} and ${loser.name}. This battle was based on their charisma. The story should be at least 100 words long.`;
        } else {
            // If it's a draw, create a prompt for the draw scenario
            prompt = `Imagine yourself as C.S. Lewis. Write an epic hobby horse racing tale that results in a draw between the two racers. The story should be at least 100 words long.`;
        }

        // Send the prompt to OpenAI API for completion
        const completion = await client.chat.completions.create({
            model: "gpt-4o-2024-08-06", 
            messages: [
                {
                    role: "user",
                    content: prompt
                },
            ],
        });

        // Return the story from the response
        return completion.choices[0].message.content;

    } catch (error) {
        console.error("Error creating the battle story:", error);
        return null;
    }
}

module.exports = generateBattleTale */