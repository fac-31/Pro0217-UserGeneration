//external imports
require("dotenv").config();
const browserSync = require("browser-sync").create();
const express = require("express");
const { OpenAI } = require("openai");
const cors = require("cors");

//internal imports
const getCharacter = require("./get-character");
//const BuildCharacter = require("./Front-end/public/buildCharacter");

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

app.use(cors()); //allows front end request -- trial --J
app.use(express.json()); //Parses JSON request bodies --trial --J

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

//dummy data to render character --J
app.get("/data", (req, res) => {
	const data = { hat: "red", skin: "red", outfit: "red", boots: "green" };
	res.json(data);
});

//Calls function to create character object --> not sure where to store yet
async function setCharacterValue() {
	const characterObject = await getCharacter(client);
}

setCharacterValue();
