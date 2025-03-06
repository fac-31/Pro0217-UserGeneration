//external imports
require("dotenv").config();
const browserSync = require("browser-sync").create();
const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs").promises;

//NC - Import the router
const saveCharacterData = require("./save-character-data");
const getBackground = require("./generate-background");

//NC - saving weapon data - Define the function to get the character's file path before use
const getCharacterFilePath = (userId) => {
    return path.join(__dirname, "back-end", "characterdata", `${userId}.json`);
};

//NC - random character selector
const randomCharacterSelector = require("./Back-end/selecting-intruder"); 


//internal imports
//const getCharacter = require("./get-character");
//const BuildCharacter = require("./Front-end/public/buildCharacter-class");

//variables - INITIALISE THE SECTION
const app = express();
const PORT = process.env.PORT || 3000;

//NC - Middleware and routes section

app.use(cors());

//NC - use express to parse JSON data
app.use(express.json());

//NC - Use the imported router for character routes
app.use("/api", saveCharacterData);

// Serve static files from the "public" directory
app.use(express.static("front-end/public"));

// Define a route for the home page
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/front-end/public/index.html");
});

// Route for create.html
app.get("/create.html", (req, res) => {
	res.sendFile(__dirname + "/front-end/public/create.html");
});

// Route for saving weapon 
app.post("/api/save-weapon/:userId", async (req, res) => {
    const { userId } = req.params; 
    const { weapon } = req.body;   

    try {
       
        const filePath = getCharacterFilePath(userId);

        let characterData = await fs.readFile(filePath, "utf8");
        characterData = JSON.parse(characterData);

        characterData.selectedWeapon = weapon;

        await fs.writeFile(filePath, JSON.stringify(characterData, null, 2));
        res.json({ message: "Weapon saved to JSON", selectedWeapon: weapon });
    } catch (error) {

        console.error("Error saving weapon:", error);
        res.status(500).json({ message: "Error saving weapon choice" });
    }
});

// Route to start battle and select an intruder
app.get("/api/start-battle/:userId", async (req, res) => {
    const { userId } = req.params;

    try {
        // Select a random intruder using the randomCharacterSelector function
        const intruderData = await randomCharacterSelector();

        if (intruderData) {
          
            res.json({
                message: intruderData.message,
                intruder: intruderData.data, 
                fileName: intruderData.fileName
            });
        } else {

            res.status(404).json({ message: "No intruder found." });
        }
    } catch (error) {
        console.error("Error starting battle:", error);
        res.status(500).json({ message: "Error starting the battle." });
    }
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

//JM route for lounge background image
app.get("/background-image", async (req, res) => {
	let background;

	try {
		background = await getBackground();
	} catch (error) {
		console.error("Failed to fetch image:", error);
	}
	console.log(background);
	res.json({ url: background });
});

//Browser sync setup
browserSync.init({
	proxy: `http://localhost:${PORT}`,
	files: ["front-end/public/*/.*"],
	reloadDelay: 50,
});
