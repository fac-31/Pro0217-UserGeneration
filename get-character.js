const devContent =
	"You are a psychologist analysing the different attributes of a character that has been described to you by the user. Your job is to rate each attribute as a number between 1 and 10. 10 being that the character has as much as they can of this attribute, and 1 being that the character has none of this attribute. The categories that you have to rate are: strength, dexterity, constitution, intelligence, wisdom, charisma, and empathy, and other abilities. Assign a number between 1 and 10 for each attribute so that the total points assigned does not exceed 60. If there is not much information to go off to assign points, feel free to speculate, but prioritise well evidenced point assignment. I also want you to decide on some key interior design features that will help to build a living room that you think the character will enjoy";
const userContent =
	"I'm super adventurous and love climbing trees. I love days out in the woods and am always bringing my friends - i think it does them good to get out of the city!. My favorite color is green and if my friends were to describe me in one word it would be chatty";

//Makes an openAI call that generates a character object
async function getCharacter(client, characterData) {
	console.log("Calling getCharacter()");
	try {
		const completion = await client.chat.completions.create({
			model: "gpt-4o-2024-08-06",
			messages: [
				{
					role: "developer",
					content: devContent,
				},
				{
					role: "user",
					content: JSON.stringify(characterData),
				},
			],
			response_format: {
				type: "json_schema",
				json_schema: {
					name: "character_schema",
					schema: {
						type: "object",
						//DM an idea to make a generator for this stuff
						properties: {
							Strength: {
								description: "A measure of the characters physical power",
								type: "number",
							},
							Str_thoughts: {
								description:
									"The reasoning behind choosing the value for 'Strength'",
								type: "string",
							},
							Dexterity: {
								description: "A measure of the characters agility and reflexes",
								type: "number",
							},
							Dex_thoughts: {
								description:
									"The reasoning behind choosing the value for 'Dexterity'",
								type: "string",
							},
							Constitution: {
								description: "A measure of the characters health and stamina",
								type: "number",
							},
							Con_thoughts: {
								description:
									"The reasoning behind choosing the value for 'Constitution'",
								type: "string",
							},
							Intelligence: {
								description:
									"A measure of the characters intelligence and ability to reason",
								type: "number",
							},
							Int_thoughts: {
								description:
									"The reasoning behind choosing the value for 'Intelligence'",
								type: "string",
							},
							Wisdom: {
								description:
									"A measure of the characters perceptiveness and insightful intuition",
								type: "number",
							},
							Wis_thoughts: {
								description:
									"The reasoning behind choosing the value for 'Wisdom'",
								type: "string",
							},
							Charisma: {
								description:
									"A measure of the characters ability to interact effectively with others - often persuasive",
								type: "number",
							},
							Cha_thoughts: {
								description:
									"The reasoning behind choosing the value for 'Charisma'",
								type: "string",
							},
							Empathy: {
								description: "A measure of the characters ability to empathise",
								type: "number",
							},
							Emp_thoughts: {
								description:
									"The reasoning behind choosing the value for 'Empathy'",
								type: "string",
							},
							MusicalAbility: {
								description: "A measure of the characters musical abilities",
								type: "number",
							},
							MusicalAbility_thoughts: {
								description:
									"The reasoning behind choosing the value for 'MusicalAbility'",
								type: "string",
							},
							CookingAbility: {
								description: "A measure of the characters cooking abilities",
								type: "number",
							},
							CookingAbility_thoughts: {
								description:
									"The reasoning behind choosing the value for 'CookingAbility'",
								type: "string",
							},
							CodingAbility: {
								description:
									"A measure of the characters coding and programming abilities",
								type: "number",
							},
							CodingAbility_thoughts: {
								description:
									"The reasoning behind choosing the value for 'CodingAbility'",
								type: "string",
							},
							Fashion: {
								description: "A measure of the characters fashion and style",
								type: "number",
							},
							Fashion_thoughts: {
								description:
									"The reasoning behind choosing the value for 'Fashion'",
								type: "string",
							},

							FishingAbility: {
								description: "A measure of the characters fishing abilities",
								type: "number",
							},
							FishingAbility_thoughts: {
								description:
									"The reasoning behind choosing the value for 'Fishing'",
								type: "string",
							},
							lighting: {
								description:
									"give a short description of the lighting style this character would enjoy in their living room",
								type: "string",
							},
							lighting_thoughts: {
								description:
									"The reasoning behind choosing the value for 'lighting'",
								type: "string",
							},
							color: {
								description:
									"decide the main color of this living room that you think the character would enjoy",
								type: "string",
							},
							color_thoughts: {
								description:
									"The reasoning behind choosing the value for 'color'",
								type: "string",
							},
							coffeeTable: {
								description:
									"A short description of a coffee table that you think the character would enjoy",
								type: "string",
							},
							coffeeTable_thoughts: {
								description:
									"The reasoning behind choosing the value for 'coffeeTable'",
								type: "string",
							},
							wallArt: {
								description:
									"a decription of what should be painted in a picture frame in the living room - to the characters taste",
								type: "string",
							},
							wallArt_thoughts: {
								description:
									"The reasoning behind choosing the value for 'wallArt'",
								type: "string",
							},
							floor: {
								description:
									"A short description of the type of floor that the character would enjoy",
								type: "string",
							},
							floor_thoughts: {
								description:
									"The reasoning behind choosing the value for 'floor'",
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
	} catch (error) {
		console.error(error);
	}
}

module.exports = getCharacter;
