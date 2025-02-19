// server.js

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const browserSync = require("browser-sync").create();

// Serve static files from the "public" directory
app.use(express.static("public"));

// Define a route for the home page
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
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
