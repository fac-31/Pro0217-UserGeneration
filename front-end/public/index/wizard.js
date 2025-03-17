export default class Wizard {
	constructor() {
		this.image1 = document.getElementById("wizard1");
		this.image2 = document.getElementById("wizard2");
	}

	draw(ctx, currentImage) {
		if (currentImage === "wizard2") {
			ctx.drawImage(this.image1, 0, 0, 526, 526, 0, 53, 350, 100);
		} else {
			ctx.drawImage(this.image2, 0, 0, 526, 526, 0, 53, 350, 100);
		}
	}
}
