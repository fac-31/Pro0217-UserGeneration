//imports
require("dotenv").config();
const browserSync = require("browser-sync").create();
const express = require("express");
const { OpenAI } = require("openai");

//global variables
const app = express();
const PORT = process.env.PORT || 3000;
const client = new OpenAI({
	apiKey: process.env.OPEN_AI_KEY,
});

// Serve static files from the "public" directory
app.use(express.static("public"));

// Define a route for the home page
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

//Browser sync setup
browserSync.init({
		proxy: `http://localhost:${PORT}`,
		files: ["public/*/.*"],
		reloadDelay: 50,
	});
	
let characterObject;
//open ai call --> return schema to describe character
const apiCall = async function () {
	console.log("making call");

	const completion = await client.chat.completions.create({
		model: "gpt-4o-2024-08-06",
		messages: [
			{
				role: "developer",
				content:
					"return the key chracteristics of a character described by the user",
			},
			{
				role: "user",
				content:
					"build me a character that is 6ft tall with red hair. The character is called Harvey",
			},
		],
		response_format: {
			type: "json_schema",
			json_schema: {
				name: "character_schema",
				schema: {
					type: "object",
					properties: {
						character_name: {
							description: "The name of the new character",
							type: "string",
						},
						hair_color: {
							description: "the hair color of the new character",
							type: "string",
						},
						height: {
							description: "The height of the character",
							type: "string",
						},
					},
					additionalProperties: false,
				},
			},
		},
		store: true,
	});

	characterObject = completion.choices[0].message.content;
	return completion.choices[0].message.content;
};

apiCall().then(() => {
	console.log(characterObject);
})

