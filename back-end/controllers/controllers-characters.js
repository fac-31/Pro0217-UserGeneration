const fs = require("fs");
const path = require("path");
const { OpenAI } = require("openai");
const getCharacter = require("../openAi-calls/generate-character");
const getBackground = require("../openAi-calls/generate-background");

//configs openAI
const client = new OpenAI({
	apiKey: process.env.OPEN_AI_KEY,
});

//stores all created userId --> to become a set
const userIdArray = [];

//file path to characterArray.json
const file = path.join(
	__dirname,
	"..",
	"..",
	"back-end",
	"characterData",
	"characterArray.json"
);

//GET controller
exports.sendCharacter = (req, res) => {
	//reading characterArray.json
	fs.readFile(file, (err, data) => {
		if (err) {
			console.log("At sendCharacter: Error reading characterArray file:", err);
			return res.status(500).json({
				message: "At sendCharacter: Error retrieving characterArray file",
			});
		}
		//getting the latest character data and latest ID
		const dataSet = JSON.parse(data);
		const latestCharacter = dataSet[dataSet.length - 1];
		const latestId = userIdArray[userIdArray.length - 1];
		console.log(latestCharacter);

		//checks for matching userId to verify correct character
		if (latestId == latestCharacter.userId) {
			res.json(latestCharacter);
		} else {
			console.log("At sendCharacter: Character id doesn't match");
			return res
				.status(500)
				.json({ message: "At sendCharacter: Character id doesn't match" });
		}
	});
};

//POST controller
exports.saveCharacter = async (req, res) => {
	//data from input form
	const characterData = req.body;

	try {
		//Calling functions to gather data and write json
		const fullCharacterData = await makeDataNice(characterData);
		writeCharacterFile(file, fullCharacterData);

		res.json({
			message: "At saveCharacter: Ingredients in the fridge",
		});
	} catch (error) {
		console.error("At saveCharacter: Error saving character data:", error);
	}
};

async function makeDataNice(characterData) {
	//storing OpenAI response (character personailty stats)
	const characterStatData = await getCharacter(client, characterData);

	//Creates userId and apends to userIdArray
	const userId = Math.floor(Math.random() * 9000) + 1000;
	userIdArray.push(userId);

	//creates full character object (form data + openAI response + userId)
	const fullCharacterData = {
		...characterData,
		...JSON.parse(characterStatData),
		userId,
	};

	//Gets background image and sets url value in character object
	const backgroundData = await getBackground(fullCharacterData);
	fullCharacterData["url"] = backgroundData;

	return fullCharacterData;
}

function writeCharacterFile(file, fullCharacterData) {
	fs.readFile(file, (err, data) => {
		if (err) {
			console.log("Error writing character array", err);
			return;
		}

		//apending latest character data to json character data
		const characterArray = JSON.parse(data);
		characterArray.push(fullCharacterData);

		//writng file with all new data
		fs.writeFileSync(file, JSON.stringify(characterArray, null, 2));
	});
}
