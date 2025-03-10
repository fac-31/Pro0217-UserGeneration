//external imports
require("dotenv").config();
const browserSync = require("browser-sync").create();
const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs").promises;


//NC - saving weapon data - Define the function to get the character's file path before use
const getCharacterFilePath = (userId) => {
    return path.join(__dirname, "back-end", "characterdata", `${userId}.json`);
};

//NC - random character selector
const randomCharacterSelector = require("./Back-end/controllers/logic-intruder-selection"); 
const generateBattleTale = require("./Back-end/openAi-calls/generate-battle-tale");


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


//NC - Route to start battle and select an intruder
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

//NC - Route to send generated tale to front end

app.post("/generate-tale", async (req,res) => {

	const {winner, loser, useFakeOpenAi} = req.body;

	try {
		const tale = await generateBattleTale(null, winner, loser, useFakeOpenAi);

		res.json({tale});

	} catch (error) {
		console.error("error generating tale:" ,error);
		res.status(500).json({error: "internal server error"});
	}
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

//JM route for lounge background image
// app.get("/background-image", async (req, res) => {
// 	let background;

// 	try {
// 		background = await getBackground();
// 	} catch (error) {
// 		console.error("Failed to fetch image:", error);
// 	}
// 	res.json({ url: background });
// });

//Browser sync setup
browserSync.init({
	proxy: `http://localhost:${PORT}`,
	files: ["front-end/public/*/.*"],
	reloadDelay: 50,
});
