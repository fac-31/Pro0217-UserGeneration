import { deleteCharacter } from "./lounge-delete-user.js";

// Winner loser check added
export async function winnerlosercheck(loser) {
    console.log("winner/loser function started");
    console.log("Loser data received:", loser.userId);

// Ensure the button exists before attaching event listener
    const endButton = document.getElementById("endButton");

    if (!endButton) {
        console.error("End button not found.");
        console.log("button not on page yet")
        return; 
    }
    endButton.addEventListener("click", async () => {
        const currentUserId = localStorage.getItem("currentUserId");
        console.log("Current userId within localStorage:", currentUserId);

//Ensure currentUserId is valid
        if (!currentUserId) {
            console.error("Current userId not found in localStorage.");
            return;
        }

//If the loser userId matches the local storage current user's ID, redirect to result-loser.html
        if (currentUserId === String(loser.userId)) {
            console.log("Current user is the loser");

            try {
//alert to ensure user knows character is being deleted
                alert("You lost! Deleting your character...");

                const deleteUser = await deleteCharacter(loser.userId);
                if (deleteUser) {
                    console.log("You are the loser. Redirecting to result-loser.html...");
                    window.location.href = "/death/death.html";
                }
            } catch (error) {
                console.error("Error deleting character:", error);
                alert("There was an issue deleting your character. Please try again.");
            }
        } else {  
            console.log("You are the winner. Stay on page.");
            alert("You defended your living room!");

            const mainContent = document.getElementById("loungeContainer");

            if (mainContent) {
                const gif = document.createElement("img");
                gif.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTFtbDUxdXZ2ZHI4YjdjbTBwaXhkaTc4cWRqd3owZjc2cHg5cG82eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/D2hncA3u88gmeCFeoh/giphy.gif";
                gif.style.width = "300px";
                gif.style.display = "block";
                gif.style.margin = "20px auto";

                mainContent.appendChild(gif);

                setTimeout(() => {
                    gif.remove();
                    console.log("GIF removed after 2.5 seconds.");
                }, 2500);
            } else {
                console.error("Error: mainContent element not found.");
            }
        }
    }, { once: true }); // Ensures the event listener is only attached once
}
