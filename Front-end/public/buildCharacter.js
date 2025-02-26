//a class to build both the user and intruder characters
class BuildCharacter {
	constructor(canvasId) {
		this.canvas = document.getElementById(canvasId);
		this.ctx = this.canvas.getContext("2d");
	}

	async fetchData(url) {
		//fetches dummy character object from server
		try {
			const response = await fetch(url);
			const data = await response.json().then(console.log("data recieved"));
			this.draw(data);
		} catch (error) {
			console.error(error);
		}
	}

	draw(data) {
		//draws 4 rectangles to represent each part on the character
		console.log(data);
		this.ctx.fillStyle = data.hat;
		this.ctx.fillRect(0, 0, 300, 20);

		this.ctx.fillStyle = data.skin;
		this.ctx.fillRect(0, 20, 300, 20);

		this.ctx.fillStyle = data.outfit;
		this.ctx.fillRect(0, 40, 300, 20);

		this.ctx.fillStyle = data.boots;
		this.ctx.fillRect(0, 60, 300, 20);
	}
}

let user = new BuildCharacter("characterCanvas");
user.fetchData("http://localhost:3000/data"); //dummy route on server

let intruder = new BuildCharacter("intruderCanvas");
intruder.fetchData("http://localhost:3000/data"); //dummy route on server
