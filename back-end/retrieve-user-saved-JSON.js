const fs = require("fs");
const path = require("path");


function getUserCharacterData(fileName) {
  const dataFolder = path.join(__dirname, "back-end", "characterData");
  const filePath = path.join(dataFolder, fileName);

  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(`Error reading character data: ${err}`);
      } else {
        resolve(JSON.parse(data)); 
      }
    });
  });
}
module.exports = getUserCharacterData;
