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

//variables - INITIALISE THE SECTION
const app = express();
const PORT = process.env.PORT || 3000;
const router = require("./back-end/routes/routes");
//const {
//	saveCharacter,
//} = require("./back-end/controllers/controllers-characters");
const saveCharacter = require("./back-end/controllers/controllers-characters");

//NC - Middleware and routes section

//app.use("/api", saveCharacter);

app.use(cors());

//NC - use express to parse JSON data
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static("front-end/public"));

// Define a route for the home page
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/front-end/public/index/index.html");
});

// Route for create.html
app.get("/create.html", (req, res) => {
	res.sendFile(__dirname + "/front-end/public/create/create.html");
});

// Route for character and weapon data
app.use(router);

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

//Browser sync setup
browserSync.init({
	proxy: `http://localhost:${PORT}`,
	files: ["front-end/public/*/.*"],
	reloadDelay: 50,
});
