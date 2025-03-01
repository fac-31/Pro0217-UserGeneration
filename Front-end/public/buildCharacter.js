//a class to build both the user and intruder characters
class BuildCharacter {
	constructor(canvasId) {
		this.canvas = document.getElementById(canvasId);
		this.ctx = this.canvas.getContext("2d");
	}

	async fetchData(url) {
		try {
			const response = await fetch("http://localhost:3000/api/characters");

			if (!response.ok) {
				throw new Error("Failed to fetch character data");
			}

			const data = await response.json();
			console.log("character data", data);
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
user.fetchData("http://localhost:3000/api/characters"); //dummy route on server

//let intruder = new BuildCharacter("intruderCanvas");
//intruder.fetchData("http://localhost:3000/data"); //dummy route on server
