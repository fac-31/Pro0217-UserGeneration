//NC - function to save weapon into the last character entry of the characterArray.JSON

const fs = require("fs").promises;
const path = require("path");
const getCurrentUser = require('./logic-current-user'); // Import your getCurrentUser module

// File path to the character array
const getCharacterFilePath = () => {
	return path.join(__dirname, '..', '..', 'back-end', 'characterData', 'characterArray.json');
  };

// Function to save the weapon
exports.saveWeapon = async (req, res) => {
        console.log("saving weapon");
    const { weapon } = req.body;

    try {

//NC- module to select latest user written as a module to avoid repetition in different fucntions - calls logic-current-user.js

        const { currentUser } = await getCurrentUser();

        if (!currentUser) {
            return res.status(400).json({ message: "No current user found." });
        }

//NC- Update the weapon for the current user
        currentUser.weapon = weapon;

//NC- Get the file path for the JSON file
        const filePath = getCharacterFilePath();

// Read the current character data from the JSON file
        let characterData = await fs.readFile(filePath, "utf8");

// Parse the JSON string into a JavaScript array
        characterData = JSON.parse(characterData);

// Find the index of the current user and update the weapon
        const userIndex = characterData.findIndex(character => character.userId === currentUser.userId);
        if (userIndex === -1) {
            return res.status(400).json({ message: "User not found in character data." });
        }

// Update the weapon in the character array
        characterData[userIndex] = currentUser;

// Save the updated character data back to the file
        await fs.writeFile(filePath, JSON.stringify(characterData, null, 2));

//NC- log the weapon and userId 
console.log(`Weapon has been saved! userId: ${currentUser.userId}, Weapon: ${currentUser.weapon}`);
res.json({ message: "Weapon has been saved!", weapon: currentUser.weapon });

		

    } catch (error) {
        console.error("Error saving weapon:", error);
        res.status(500).json({ message: "Error saving weapon." });
    }
};
