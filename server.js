// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Define a route for the home page
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/Front-end/public/index.html');
});

// Serve static files from the "public" directory
app.use(express.static('Front-end/public'));

// Route for create.html
app.get('/create.html', (req, res) => {
	res.sendFile(__dirname + 'Front-end/public/create.html');
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});