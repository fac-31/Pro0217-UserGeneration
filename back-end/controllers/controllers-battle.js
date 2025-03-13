//NC - Route to send generated tale to front end

app.get("/generate-tale", async (req,res) => {

	const {winner, loser, } = req.body;

	try {
		const tale = await generateBattleTale(null, winner, loser, useFakeOpenAi);

		res.json({tale});

	} catch (error) {
		console.error("error generating tale:" ,error);
		res.status(500).json({error: "internal server error"});
	}
});