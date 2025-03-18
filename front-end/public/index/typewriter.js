export default class Typewriter {
	constructor(
		string,
		delay,
		pause,
		htmlElement,
		choiceElement,
		textId,
		timeout,
		callToEvents
	) {
		//provided variables
		this.string = string;
		this.delay = delay;
		this.pause = pause;
		this.timeout = timeout;
		this.callToEvents = callToEvents;

		this.text = htmlElement;
		this.choice = choiceElement;
		this.textArea = textId;

		//counter variables
		this.i = 0;
		this.pauseI = 0;
		this.totalPause = 0;
	}

	type() {
		if (this.i < this.string.length) {
			if (this.string[this.i] === "~") {
				setTimeout(() => this.type(), this.pause[this.pauseI]);
				this.pauseI++;
			} else {
				this.text.innerHTML += this.string[this.i];
				setTimeout(() => this.type(), this.delay);
			}
			this.i++;
		}
	}

	calcTime() {
		let addPause = 0;
		let textPause = this.string.length * this.delay;
		this.pause.forEach((p) => {
			addPause += p;
		});
		this.totalPause = addPause + textPause;
	}

	showChoice() {
		setTimeout(() => {
			//drawWizard();
			this.choice.classList.remove("hidden");
			if (this.textArea) {
				const element = document.getElementById(this.textArea);
				element.focus();
			}
			if (this.timeout) {
				setTimeout(() => {
					this.callToEvents();
				}, this.timeout);
			} else {
				this.callToEvents();
			}
		}, this.totalPause);
	}

	start() {
		this.calcTime();
		this.type();
		this.showChoice();
	}
}
