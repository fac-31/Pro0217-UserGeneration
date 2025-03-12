import typeIntro from "./intro.js";
import {
	introContent,
	hatContent,
	outfitContent,
	bootsContent,
	skinContent,
	bioContent,
	nameContent,
} from "./content.js";

const characterData = {};
characterData.name = "test";
characterData.biography = "test";

typeIntro(introContent);

introContent.events.forEach(({ id, event }) => {
	const element = document.getElementById(id);
	if (element) {
		element.addEventListener(event, () => {
			typeIntro(nameContent);
			listenforHat();
		});
	}
});

function listenforHat() {
	const element = document.getElementById(nameContent.id);
	const input = document.getElementById(nameContent.inputId);
	element.addEventListener(nameContent.events, (e) => {
		e.preventDefault();
		characterData.name = input.value;
		typeIntro(hatContent);
		listenForOutfit();
	});
}

function listenForOutfit() {
	hatContent.events.forEach(({ id, event }) => {
		const element = document.getElementById(id);
		if (element) {
			element.addEventListener(event, () => {
				characterData.hat = id;
				typeIntro(outfitContent);
				listenForBoots();
			});
		}
	});
}

function listenForBoots() {
	outfitContent.events.forEach(({ id, event }) => {
		const element = document.getElementById(id);
		if (element) {
			element.addEventListener(event, () => {
				characterData.outfit = id;
				typeIntro(bootsContent);
				listenForSkin();
			});
		}
	});
}

function listenForSkin() {
	bootsContent.events.forEach(({ id, event }) => {
		const element = document.getElementById(id);
		if (element) {
			element.addEventListener(event, () => {
				characterData.boots = id;
				typeIntro(skinContent);
				listenForBio();
			});
		}
	});
}

function listenForBio() {
	skinContent.events.forEach(({ id, event }) => {
		const element = document.getElementById(id);
		if (element) {
			element.addEventListener(event, () => {
				characterData.skin = id;
				typeIntro(bioContent);
				listenforSave();
			});
		}
	});
}

function listenforSave() {
	const element = document.getElementById(bioContent.id);
	const input = document.getElementById(bioContent.inputId);
	element.addEventListener(bioContent.events, (e) => {
		e.preventDefault();
		characterData.biography = input.value;
		console.log("time to send data!", characterData);
		saveCharacter();
	});
}

function saveCharacter() {
	//NC - convert javascript object into JSON and send to backend
	fetch("http://localhost:3000/characters", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(characterData),
	})
		//NC - .then is required as sequence of parsing info and redirection etc is important
		.then((response) => response.json())
		.then((data) => {
			console.log("backend response:", data);
			alert("Success!");
			window.location.href = `/lounge/lounge.html`; //NC- userId is passed into the url
		})

		//NC - .catch error handling, alert message prompting user to re-enter and check info
		.catch((error) => {
			console.error("Error sending data to backend:", error);
			alert("api call failed");
		});
}
