// Extract name and bigraphy which has entered into the character create

const button = document.getElementById("submitButton");

// Use submit button from create page as event
button.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("User presses create.");

    //Extract name and bigraphy which has entered into the character create
    const name = document.getElementById("name").value;
    const biography = document.getElementById("biography").value;

    console.log("User name", name);
    console.log("Biography", biography);

    localStorage.setItem("characterName", name);
    localStorage.setItem("characterBiography", biography);
    console.log("Your character has been saved to local storage.");

    alert("Character has been saved!");
});

//Object that can be sent to back end - characterName and characterBiography
const characterData = {
    name: localStorage.getItem("characterName"),
    biography: localStorage.getItem("characterBiography"),
};


console.log("Character data object for backend created:", characterData);