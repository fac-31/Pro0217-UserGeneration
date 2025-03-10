document.getElementById("fightButton").addEventListener("click", async () => {
    const userId = new URLSearchParams(window.location.search).get("userId");

    console.log("Fight button clicked");

    try {

//NC- Send a request to the backend to select an intruder from existing JSONs
        const response = await fetch(`/api/start-battle/${userId}`);
        const data = await response.json();

        if (response.ok) {
            const intruderData = data.intruder;
            console.log("Intruder User ID:", intruderData.userId); 
            console.log("Intruder selected:", intruderData);
            console.log(`${userId} vs ${intruderData.userId}`);
        } else {
            console.error("Error starting battle:", data.message);
        }
    } catch (error) {
        console.error("Error starting battle:", error);
    }
});

