/* //NC - Route to start battle and return battle tale
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
}); */


/* //NC - Route to send generated tale to front end

app.post("/generate-tale", async (req,res) => {

	const {winner, loser, useFakeOpenAi} = req.body;

	try {
		const tale = await generateBattleTale(null, winner, loser, useFakeOpenAi);

		res.json({tale});

	} catch (error) {
		console.error("error generating tale:" ,error);
		res.status(500).json({error: "internal server error"});
	}
}); */