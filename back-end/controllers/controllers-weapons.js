// Save-weapon-data-get
exports.saveWeapon = async (req, res) => {
	const { userId } = req.params;
	const { weapon } = req.body;

	try {
		const filePath = getCharacterFilePath(userId);

		let characterData = await fs.readFile(filePath, "utf8");
		characterData = JSON.parse(characterData);

		characterData.selectedWeapon = weapon;

		await fs.writeFile(filePath, JSON.stringify(characterData, null, 2));
		res.json({ message: "Weapon saved to JSON", selectedWeapon: weapon });
	} catch (error) {
		console.error("Error saving weapon:", error);
		res.status(500).json({ message: "Error saving weapon choice" });
	}
};
