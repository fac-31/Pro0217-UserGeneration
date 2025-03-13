document.getElementById('weaponButton').addEventListener('click', async () => {
    try {
        // NC - weapon choice is extracted and sent to the backend
        const selectedWeapon = document.querySelector('input[name="weapons"]:checked').value;

        // NC - Send the weapon to the backend
        console.log("save weapon triggered");
        const response = await fetch('/save-weapon', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ weapon: selectedWeapon }),
        });

        // Check if the response was successful
        if (!response.ok) {
            throw new Error("Failed to save the weapon");
        }

        const data = await response.json(); // Get the response body as JSON

        // Log to console that the weapon was successfully saved
        console.log(`Weapon "${selectedWeapon}" has been successfully saved!`);

        // Trigger the battle logic right after the weapon has been saved
        console.log("battle triggered");
        const battleResponse = await fetch('/start-battle', {
            method: 'GET',
        });

        // Check if the battle response is successful
        if (!battleResponse.ok) {
            throw new Error("Battle logic failed.");
        }

        const battleData = await battleResponse.json();
        const { winner, loser } = battleData;

        // NC - Display the battle result
        document.getElementById('result').textContent = `Weapon saved! - Battle Result: Winner is ${winner.name}, Loser is ${loser.name}`;

    } catch (error) {
        console.error("Error:", error);
        document.getElementById('result').textContent = "There was an error selecting the weapon or starting the battle. Please try again.";
    }
});
