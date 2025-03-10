const { OpenAI } = require("openai");
require("dotenv").config();

//JM configuring open ai
const client = new OpenAI({
	apiKey: process.env.OPEN_AI_KEY,
});

async function getBackground(data) {
	console.log("making api call");
	try {
		const response = await client.images.generate({
			model: "dall-e-3",
			prompt: `Draw a pixel art style living room. The room is ${data.lighting}, with comfortable ${data.color} sofas, a ${data.coffeeTable} coffee table at the center, and vibrant indoor plants adding greenery around. The walls are adorned with frames containing ${data.wallArt}. The room also has large windows that allow plenty of natural light to pass through. The curtains are ${data.color}. The ${data.floor} floor adds to aesthetic of the room.`,
			n: 1, //JM number of images created
			size: "1024x1024", //JM note to make this dynamic for screen size? (or modify from css?)
		});

		//console.log("background response:", response);
		return response.data[0].url;
	} catch (error) {
		console.error(error);
	}
}

module.exports = getBackground;
