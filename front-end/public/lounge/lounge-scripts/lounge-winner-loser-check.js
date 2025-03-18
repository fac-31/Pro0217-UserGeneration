import { deleteCharacter } from "./lounge-delete-user.js";

// Winner loser check added
export async function winnerlosercheck(loser) {
    console.log("begin winner/loser check");
    const endButton = document.getElementById("endButton");

    if (endButton) {
        endButton.addEventListener("click", async () => {
            const currentUserId = localStorage.getItem("userId");

// If the loser userId matches the current user's ID, redirect to result.html
            if (currentUserId === loser.userId) {
                console.log("current user is the loser");

                const deleteUser = await deleteCharacter(loser.userId);

                if (deleteUser) {
                    console.log("You are the loser. Redirecting to result.html...");
                    window.location.href = "/result-loser.html";
                }
            } else {  
                console.log("You are the winner. Stay on page.");
                alert("You defended your living room!");

                const mainContent = document.getElementById("mainContent");

                if (mainContent) {
                    var gif = document.createElement("img");
                    gif.src = "https://media.giphy.com/media/cYpV2OjeIyBRu5GpHQ/giphy.gif";
                    gif.style.width = "300px";
                    gif.style.display = "block";
                    gif.style.margin = "20px auto";

                    mainContent.appendChild(gif);

                    setTimeout(() => {
                        gif.remove();
                        console.log("GIF removed after 10 seconds.");
                    }, 2500);
                } else {
                    console.error("mainContent element not found.");
                }
            }  
        });
    } else {
        console.error("endButton element not found.");
    }
}
