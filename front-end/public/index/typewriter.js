export default class Typewriter {
	constructor(string, delay, pause, htmlElement, choiceElement, textId) {
		//provided variables
		this.string = string;
		this.delay = delay;
		this.pause = pause;

		this.text = htmlElement;
		this.choice = choiceElement;
		this.textArea = textId;

		//counter variables
		this.i = 0;
		this.pauseI = 0;
		this.totalPause = 0;
	}

	type() {
		console.log(this.text);
		if (this.i < this.string.length) {
			if (this.string[this.i] === "~") {
				setTimeout(() => this.type(), this.pause[0]);
				this.pauseI++;
			} else {
				this.text.innerHTML += this.string[this.i];
				setTimeout(() => this.type(), this.delay);
			}
			this.i++;
		}
	}

	calcTime() {
		this.pause.forEach((p) => {
			this.totalPause += p;
		});
		this.totalPause += (this.string.length - this.pause.length) * this.delay;
	}

	showChoice() {
		setTimeout(() => {
			this.choice.classList.remove("hidden");
			if (this.textArea) {
				const element = document.getElementById(this.textArea);
				element.focus();
			}
		}, this.totalPause);
	}

	start() {
		this.calcTime();
		this.type();
		this.showChoice();
	}
}
