//a class to build both the user and intruder characters
export default class BuildCharacter {
	constructor(canvasId, data) {
		console.log(data);
		this.canvas = document.getElementById(canvasId);
		this.ctx = this.canvas.getContext("2d");
		this.hat = data.hat;
		this.skin = data.skin;
		this.outfit = data.outfit;
		this.boots = data.boots;
	}

	draw() {
		//draws 4 rectangles to represent each part on the character
		this.ctx.fillStyle = this.hat;
		this.ctx.fillRect(0, 0, 300, 20);

		this.ctx.fillStyle = this.skin;
		this.ctx.fillRect(0, 20, 300, 20);

		this.ctx.fillStyle = this.outfit;
		this.ctx.fillRect(0, 40, 300, 20);

		this.ctx.fillStyle = this.boots;
		this.ctx.fillRect(0, 60, 300, 20);
	}
}
