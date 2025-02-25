//canvas.height = 700;
//canvas.width = 350;
let canvas = document.getElementById("characterCanvas");
let ctx = canvas.getContext("2d");

class BuildCharacter {
	constructor() {}

	async fetchData() {
		try {
			const response = await fetch("http://localhost:3000/data");
			const data = await response.json().then(console.log("data recieved"));
			this.draw(data);
		} catch (error) {
			console.error(error);
		}
	}

	draw(data) {
		console.log(data);
		ctx.fillStyle = data.hat;
		ctx.fillRect(0, 0, 300, 20);

		ctx.fillStyle = data.skin;
		ctx.fillRect(0, 20, 300, 20);

		ctx.fillStyle = data.outfit;
		ctx.fillRect(0, 40, 300, 20);

		ctx.fillStyle = data.boots;
		ctx.fillRect(0, 60, 300, 20);
	}
}

let user = new BuildCharacter();
user.fetchData();
