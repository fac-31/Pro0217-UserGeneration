/* document.getElementById("fightButton").addEventListener("click", async () => {
    const userId = new URLSearchParams(window.location.search).get("userId");


try {

    const response = await fetch('/generate-tale');

    if(!response.ok) {
        throw new Error ("failed to fetch battle tale")
    }

    const data = await response.json();
    const battleTale = data.battleTale;

    console.log("the tale:", battleTale);
    document.getElementById("generated-tale").textContent = battleTale;


} catch (error) {
    console.error("Error getting story:", error);
    document.getElementById("battleTale").textContent = "error")
}
}); */