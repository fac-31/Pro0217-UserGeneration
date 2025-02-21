const devContent =
	"You are a psychologist analysing the different attributes of a character that has been described to you by the user. Your job is to rate each attribute as a number between 1 and 10. 10 being that the character has a lot of this attribute, and 1 being that the character has very little of this attribute. The categories that you have to rate are: strength, dexterity, constitution, intelligence, wisdom, charisma, and empathy. Be harsh and critical with your scoring, only give top marks where it is deserved. Remember to return a number between 1 and 10. ";
const userContent =
	"I'm super adventurous and love climbing trees. I love days out in the woods and am always bringing my friends - i think it does them good to get out of the city!. My favorite color is green and if my friends were to describe me in one word it would be chatty";

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
						Strength: {
							description: "A measure of the characters physical power",
							type: "number",
						},
						Dexterity: {
							description: "A measure of the characters agility and reflexes",
							type: "number",
						},
						Constitution: {
							description: "A measure of the characters health and stamina",
							type: "number",
						},
						Intelligence: {
							description:
								"A measure of the characters intelligence and ability to reason",
							type: "number",
						},
						Wisdom: {
							description:
								"A measure of the characters perceptiveness and insightful intuition",
							type: "number",
						},
						Charisma: {
							description:
								"A measure of the characters ability to interact effectively with others - often persuasive",
							type: "number",
						},
						Empathy: {
							description: "A measure of the characters ability to empathise",
							type: "number",
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
