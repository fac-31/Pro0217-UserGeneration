import { content } from "./content.js";
import formatEvents from "./format-events.js";

import fetchData from "../lounge/lounge-scripts/lounge-fetch-character.js";

//JM displays Tortoise background
const mainContent = document.getElementById("mainContent");
mainContent.style.backgroundImage = "url(../index/tortoise-livingroom.png)";

//JM object that gets sent to backend
const characterData = { ready: true };

const contents = [
	content.intro1,
	content.intro2,
	content.intro3,
	content.nameContent,
	content.outfitContent,
	content.bioContent,
];

const loadingContent = [
	content.loading1,
	content.loading2,
	content.loading3,
	content.loading4,
	content.loading5,
	content.loading6,
];

formatEvents(contents, characterData, callLoading, setReady);

let ready = false;
function setReady(state) {
	ready = state;
}

function callLoading(characterData) {
	console.log("1: calling loading", loadingContent);
	formatEvents(loadingContent, "", callLoading, setReady);

	if (characterData.ready) {
		saveCharacter(characterData);
	}
	characterData.ready = false;
}

export function saveCharacter(characterData) {
	//NC - convert javascript object into JSON and send to backend
	fetch("/characters", {
		//http://localhost:3000/characters
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(characterData),
	})
		//NC - .then is required as sequence of parsing info and redirection etc is important
		.then((response) => response.json())
		.then((data) => {
			console.log("backend response:", data);

			// Store userId in localStorage
			if (data.userId) {
				localStorage.setItem("currentUserId", data.userId);
				console.log("User ID stored:", data.userId);
			}

			fetchData();

			const container = document.getElementById("container");
			container.classList.add("fade-out");
			setTimeout(() => {
				window.location.href = `/lounge/lounge-tale.html`;
			}, 2000);
		})

		//NC - .catch error handling, alert message prompting user to re-enter and check info
		.catch((error) => {
			console.error("Error sending data to backend:", error);
			alert("api call failed");
		});
}
