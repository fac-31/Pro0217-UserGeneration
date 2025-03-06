//NC- front end code to pass selected weapon to back end

document.getElementById("weaponButton").addEventListener("click", async () => {
    const selectedWeapon = document.querySelector('input[name="weapons"]:checked').value;
    const userId = new URLSearchParams(window.location.search).get("userId"); 

    console.log("Selected Weapon:", selectedWeapon);
    console.log("User ID:", userId);

    if (!userId) {
        console.error("User ID is required");
        return;
    }

    try {

//NC - fetch request to back end - POST request to server which sends weapon choice on form to be saved in the back end. 
        const response = await fetch(`/api/save-weapon/${userId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ weapon: selectedWeapon }),
        });

        const data = await response.json();

        console.log(data.message); 

        alert("Weapon selected!");
        
    } catch (error) {
        console.error("Error:", error);
    }
});

