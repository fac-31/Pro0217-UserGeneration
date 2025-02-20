const devContent =
	"return the key chracteristics of a character described by the user";
const userContent =
	"build me a character that is 6ft tall with red hair. The character is called Harvey";

//Makes an openAI call that generates a character object
async function getCharacter(client) {
	console.log("Calling getCharacter()");

	const completion = await client.chat.completions.create({
		model: "gpt-4o-2024-08-06",
		messages: [
			{
				role: "developer",
				content: devContent,
			},
			{
				role: "user",
				content: userContent,
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
		//stores the returned value so the response can be built on later
		store: true,
	});

	return completion.choices[0].message.content;
}

module.exports = getCharacter;
