import Wizard from "./wizard.js";

const canvas = document.getElementById("characterCanvas");
const ctx = canvas.getContext("2d");
const wizard = new Wizard();
let gameFrame = 0;
let currentImage;
let stop = true;

export function setStop(setStop) {
	stop = setStop;
}

export function animate() {
	ctx.clearRect(0, 0, 350, 700);
	gameFrame++;

	if (stop === true) {
		currentImage = "wizard2";
		wizard.draw(ctx, currentImage);
	} else if (stop === false) {
		if (gameFrame % 30 === 0) {
			if (currentImage === "wizard2") {
				currentImage = "wizard1";
			} else {
				currentImage = "wizard2";
			}
		}
	}
	wizard.draw(ctx, currentImage);

	requestAnimationFrame(animate);
}
