//external imports
require("dotenv").config();
const browserSync = require("browser-sync").create();
const express = require("express");
const { OpenAI } = require("openai");

//internal imports
const getCharacter = require("./get-character");

//variables
const app = express();
const PORT = process.env.PORT || 3000;
const client = new OpenAI({
	apiKey: process.env.OPEN_AI_KEY,
});

// Define a route for the home page
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/Front-end/public/index.html");
});

// Serve static files from the "public" directory
app.use(express.static("Front-end/public"));

// Route for create.html
app.get("/create.html", (req, res) => {
	res.sendFile(__dirname + "Front-end/public/create.html");
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

//Browser sync setup
browserSync.init({
	proxy: `http://localhost:${PORT}`,
	files: ["public/*/.*"],
	reloadDelay: 50,
});

//Calls function to create character object --> not sure where to store yet
async function setCharacterValue() {
	const characterObject = await getCharacter(client);
	console.log(`test: ${characterObject}`);
}
setCharacterValue();
