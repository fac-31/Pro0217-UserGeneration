const fs = require("fs");
const path = require("path");
const { OpenAI } = require("openai");
const getCharacter = require("../openAi-calls/generate-character");
const getBackground = require("../openAi-calls/generate-background");
const characterArray = require("../characterData/characterArray.json");

//JM configs OpenAI
const client = new OpenAI({
	apiKey: process.env.OPEN_AI_KEY,
});

//JM An array that stores created characters and allows you to acces the most recent
//JM valid solution? --> alternatively, write a file for persistant storage of ID's
const idArray = [];

// Save-character-data-get
exports.sendCharacter = (req, res) => {
	const dataFolder = path.join(
		__dirname,
		"..",
		"..",
		"back-end",
		"characterData"
	);

	//JM checking for files in the folder --> parameters are options
	fs.readdir(dataFolder, (err, files) => {
		if (err) {
			console.error("Error reading character folder:", err);
			return res
				.status(500)
				.json({ message: "Error retrieving character folder" });
		}

		if (files.length === 0) {
			return res.status(404).json({ message: "No characters found" });
		}

		//JM getting the latest character file --> needs ammending - not dynamic
		const latestCharacter = path.join(
			dataFolder,
			`/${idArray[idArray.length - 1]}.json`
		);

		//JM reads as a text file - and responds with the character object
		fs.readFile(latestCharacter, "utf8", (err, data) => {
			//JM ensures the app doesn't crash if file is missing / not readable
			if (err) {
				console.error("Error reading character file:", err);
				return res
					.status(500)
					.json({ message: "Error retrieving character file" });
			}
			res.json(JSON.parse(data));
		});
	});
};

//save-character-data-post
exports.saveCharacter = async (req, res) => {
	const characterData = req.body;
	//console.log("Ingredients received:", characterData);

	try {
		const fullCharacterData = await makeDataNice(characterData);
		// //JM storing OpenAI response (character personailty stats)
		// const characterStatData = await getCharacter(client, characterData);
		// const userId = Math.floor(Math.random() * 9000) + 1000;

		// //JM creating new variable with both character data objects (physical + personality)
		// const fullCharacterData = {
		// 	...characterData,
		// 	...JSON.parse(characterStatData),
		// 	userId,
		// };
		//console.log("full character data:", fullCharacterData);
		const backgroundData = await getBackground(fullCharacterData);
		fullCharacterData["url"] = backgroundData;
		characterArray.push(fullCharacterData);

		// //NC - data JSON files save with the character id
		// console.log(characterData.userId);
		// const fileName = `${characterData.userId}.json`;
		// idArray.push(characterData.userId);
		// console.log("idArray:", idArray);

		//NC - path to save JSON files in a folder
		const dataFolder = path.join(
			__dirname,
			"..",
			"..",
			"back-end",
			"characterData"
		);

		//NC - Define the full path to the file - required as part using the file save
		//const filePath = path.join(dataFolder, fileName);
		const file = path.join(dataFolder, "characterArray.json");
		//console.log(fullCharacterData);
		writeFile(file, characterArray);
		//JM data test
		//const immortalCharacters = [
		//	{ name: "Hare", userId: "0000" },
		//	{ name: "Tortois", userId: "0001" },
		//	{ name: "Average Jo", userId: "0002" },
		//];
		// console.log("character array:", characterArray);
		// characterArray.push(fullCharacterData);

		// fs.writeFile(file, JSON.stringify(characterArray), (err) => {
		// 	if (err) {
		// 		console.log("Error writing character array", err);
		// 	}
		// });
		//NC - Write the character data extracted from the form to a file in JSON format
		// fs.writeFile(
		// 	filePath,
		// 	JSON.stringify(fullCharacterData, null, 2),
		// 	(err) => {
		// 		if (err) {
		// 			console.error("Problems moving your ingredients", err);
		// 			return res
		// 				.status(500)
		// 				.json({ message: "Problems moving your ingredients" });
		// 		}

		// 		//NC - file save success message
		// 		res.json({
		// 			message: "Ingredients in the fridge",
		// 			data: fullCharacterData,
		// 		});
		// 	}
		// );
		console.log("bug");
		res.json({
			message: "Ingredients in the fridge",
		});
	} catch (error) {
		console.error("error saving character data:", error);
	}
};

async function makeDataNice(characterData) {
	//JM storing OpenAI response (character personailty stats)
	const characterStatData = await getCharacter(client, characterData);
	const userId = Math.floor(Math.random() * 9000) + 1000;

	//JM creating new variable with both character data objects (physical + personality)
	const fullCharacterData = {
		...characterData,
		...JSON.parse(characterStatData),
		userId,
	};

	return fullCharacterData;
}

function writeFile(file, characterArray) {
	fs.writeFile(file, JSON.stringify(characterArray), (err) => {
		if (err) {
			console.log("Error writing character array", err);
		}
	});
}
