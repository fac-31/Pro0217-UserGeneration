const { OpenAI } = require("openai");
require("dotenv").config();

//JM configuring open ai
const client = new OpenAI({
	apiKey: process.env.OPEN_AI_KEY,
});

async function getBackground() {
	console.log("making api call");
	try {
		const response = await client.images.generate({
			model: "dall-e-3",
			prompt:
				"Imagine a detailed scene of a lively and playful dog frolicking in a grassy, flower-filled meadow under a bright sky dotted with fluffy clouds. The dog is a gorgeous Golden Retriever with a shiny golden coat. It has expressive chocolate brown eyes. The playful canine is mid-jump, chasing after a colorful butterfly that's just out of paw's reach. The sun is shimmering off its coat, highlighting its energetic and happy demeanor. Around the dog, there is an array of beautiful flowers of diverse colors.",
			n: 1, //JM number of images created
			size: "1024x1024", //JM note to make this dynamic for screen size? (or modify from css?)
		});

		console.log("background response:", response);
		return response.data[0].url;
	} catch (error) {
		console.error(error);
	}
}

module.exports = getBackground;
