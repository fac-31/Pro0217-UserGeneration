import Wizard from "./wizard.js";

const canvas = document.getElementById("characterCanvas");
const ctx = canvas.getContext("2d");
const wizard = new Wizard();
let gameFrame = 0;
let currentImage;
let stop;

export function animate() {
	if (stop) {
		stop = false;
	}
	ctx.clearRect(0, 0, 350, 700);
	gameFrame++;
	console.log(gameFrame);

	if (gameFrame % 10 === 0) {
		if (currentImage === "wizard2") {
			currentImage = "wizard1";
		} else {
			currentImage = "wizard2";
		}
	}

	wizard.draw(ctx, currentImage);
	if (!stop) {
		requestAnimationFrame(animate);
	}
}

export function drawWizard() {
	stop = true;
	wizard.draw(ctx, "wizard2");
}
