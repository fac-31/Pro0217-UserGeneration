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
			prompt: `Draw a pixel art style living room in a classic 16-bit video game look. Use bright colors and playful details. The room is ${data.lighting}, with comfortable ${data.color} sofas, and a ${data.coffeeTable} coffee table at the center. Add vibrant indoor plants for greenery around the room. The walls should be decorated with frames containing ${data.wallArt}. Include large windows that let natural light flood the space. The curtains are ${data.color}, and the ${data.floor} floor enhances the room's aesthetic.`,
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
