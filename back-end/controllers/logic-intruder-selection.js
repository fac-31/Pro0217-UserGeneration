//NC - logic to select intruder

const fs = require("fs");
const path = require("path");

const folderPath = () => {
  return path.join(__dirname, '..', '..', 'back-end', 'characterData', 'characterArray.json');
};

async function randomCharacterSelector() {
  try {
    console.log("start selecting intruder");
    // Read and parse the character array JSON file
    const filePath = folderPath();
    const data = JSON.parse(await fs.promises.readFile(filePath, "utf-8"));

    // Filter characters with ids in the range of 1500 to 9000
    const filteredCharacters = data.filter(character => character.userId >= 1500 && character.userId <= 9000);

    // Randomly select a character from the filtered list
    const randomIndex = Math.floor(Math.random() * filteredCharacters.length);
    const selectedCharacter = filteredCharacters[randomIndex];

	console.log("Selected Intruder:", selectedCharacter.userId);
  console.log("Selected Intruder Name:", selectedCharacter.name);

    return {
      message: "Intruder selected!",
      selectedCharacter: selectedCharacter,
    };
  } catch (error) {
    console.error("Error selecting random character:", error);
    return null;
  }
}

module.exports = randomCharacterSelector;
