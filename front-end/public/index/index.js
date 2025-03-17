import { content } from "./content.js";
import formatEvents from "./format-events.js";

const PORT = 3000;

//JM displays Tortoise background
const mainContent = document.getElementById("mainContent");
mainContent.style.backgroundImage = "url(../index/tortoise-livingroom.png)";

//JM object that gets sent to backend
const characterData = {};

const contents = [
	content.introContent,
	content.nameContent,
	content.hatContent,
	content.outfitContent,
	content.bootsContent,
	content.skinContent,
	content.bioContent,
];

formatEvents(contents, characterData, saveCharacter);

export function saveCharacter(characterData) {
	//NC - convert javascript object into JSON and send to backend
	fetch(`http://localhost:${PORT}/characters`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(characterData),
	})
		//NC - .then is required as sequence of parsing info and redirection etc is important
		.then((response) => response.json())
		.then((data) => {
			console.log("backend response:", data);
			alert("Success!");
			window.location.href = `/lounge/lounge-tale.html`; //NC- userId is passed into the url
		})

		//NC - .catch error handling, alert message prompting user to re-enter and check info
		.catch((error) => {
			console.error("Error sending data to backend:", error);
			alert("api call failed");
		});
}
