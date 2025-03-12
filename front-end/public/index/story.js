export default class Story {
	constructor(htmlElement, choiceElement, string, delay, pause) {
		this.htmlElement = htmlElement;
		this.choiceElement = choiceElement;
		this.string = string;
		this.delay = delay;
		this.pause = pause;
	}

	typeString() {
		this.showChoice();
		let typewriter = new Typewriter(this.htmlElement, {
			loop: false,
			delay: this.delay,
			cursor: " ",
		});

		typewriter.typeString(this.string).start();
	}
	showChoice() {
		this.timeout = this.calculateTime();
		setTimeout(() => {
			this.choiceElement.classList.remove("hidden");
		}, this.timeout);
	}

	calculateTime() {
		let time = this.string.length * this.delay + this.pause;
		return time;
	}
}
