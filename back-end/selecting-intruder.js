const fs = require("fs");
const path = require("path");

const folderPath = "./Back-end/characterData";

async function randomCharacterSelector(filterCondition = () => true) {
    try {
        const files = await fs.promises.readdir(folderPath);
        const jsonFiles = files.filter(file => file.endsWith(".json"));

        // If no JSON files are found
        if (jsonFiles.length === 0) {
            console.log("No characters found.");
            return null;
        }

        // Select a random JSON file
        const randomIndex = Math.floor(Math.random() * jsonFiles.length);
        const randomFileName = jsonFiles[randomIndex]; // Using jsonFiles instead of files
        const filePath = path.join(folderPath, randomFileName);

        // Read the file content and parse it as JSON
        const data = JSON.parse(await fs.promises.readFile(filePath, "utf-8"));

        return {
            message: "Intruder selected!",
            fileName: randomFileName,
            data: data
        };

    } catch (error) {
        console.error("Error selecting random character:", error);
        return null;
    }
}

module.exports = randomCharacterSelector;
