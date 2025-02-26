//external imports
require("dotenv").config();
const browserSync = require("browser-sync").create();
const express = require("express");
const cors = require("cors");

//NC - Import the router
const saveCharacterData = require("./saveCharacterData");

//internal imports
const getCharacter = require("./get-character");
//const BuildCharacter = require("./Front-end/public/buildCharacter");

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
app.use(express.static("Front-end/public"));

// Define a route for the home page
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/Front-end/public/index.html");
});

// Route for create.html
app.get("/create.html", (req, res) => {
	res.sendFile(__dirname + "/Front-end/public/create.html");
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
	const data = { hat: "red", skin: "orange", outfit: "green", boots: "purple" };
	res.json(data);
});
