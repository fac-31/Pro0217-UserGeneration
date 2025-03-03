//POST to generate and return used ID

app.post("/submit", (req, res) => {
	const userId = uuidv4();
	console.log("UserID = ", userId);
	res.json({ userId });
});
