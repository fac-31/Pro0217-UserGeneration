//NC - function to select intruder data from the existing list of JSONs created
//NC - pick from JSONs or from compiled character list?

const fs = require("fs");
const path = require("path");

const folderPath = "./Back-end/characterData";

async function randomCharacterSelector(filterCondition = () => true) {


    const files = await fs.promises. readdir(folderPath);
    const jsonFiles = files.filter(file=>file.endsWith(".json"));

//NC - if a file name length = 0 then No character message is looged. 
    if (jsonFiles.length === 0){
        console.log("No character.");
        return null;
}

//NC - select a random JSOn from the files saved in folder
const randomIndex = Math.floor(Math.random() * jsonFiles.length);
const randomFileName = files[randomIndex];

const filePath = path.join(folderPath, randomFileName);
const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

return{
    message: "intruder selected!",
    fileName: randomFileName,
    data: data
};

}

module.exports = randomCharacterSelector;