const fs = require("fs");
const path = require("path");

const folderPath = () => {
  return path.join(__dirname, "..", "..", "back-end", "characterData", "characterArray.json");
};

exports.runDeleteCharacter = async (req, res) => {
  console.log("Deleting loser function started");

  try {
    const filePath = folderPath();
    const loserId = req.params.id;

    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading the character data file:", err);
        return res.status(500).json({ error: "Error reading the character data file." });
      }

      let characters = JSON.parse(data);

      const index = characters.findIndex(character => character.userId === loserId);

      const deletedCharacter = characters.splice(index, 1)[0];

      fs.writeFile(filePath, JSON.stringify(characters, null, 2), "utf8", (err) => {
        if (err) {
          console.error("Error updating character data file:", err);
          return res.status(500).json({ error: "Error updating character data file." });
        }

        console.log(`Loser ${deletedCharacter.name} (ID: ${loserId}) has been deleted.`);
        res.status(200).json({ message: `Character ${deletedCharacter.name} deleted successfully.` });
      });
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
