import Typewriter from "./typewriter.js";

//Renders relevent HTML and calls Typewriter methods
export default function formatHtml(props, callBack) {
	//JM Call back function to begin next content loop
	function callToEvents() {
		callBack();
	}

	let input = "";
	let textId;

	// sets input as a textArea
	if (props.type === "text") {
		textId = props.id;
		input = `
        <textarea id=${props.id} class="input-text"></textarea>`;

		// sets input as a set of buttons
	} else if (props.type === "select") {
		for (let i = 0; i < props.events.length; i++) {
			input += `<button id=${props.events[i].id} class="button" onclick=${props.events[i].handler} >
            ${props.events[i].content}
            </button>`;
		}
	}

	let htmlElement = `<p class="tortoise-text" id="tortoiseText"></p>
					<div class="button-container hidden" id="button"> ${input} </div>`;

	// renders HTML
	let render = document.getElementById("storyContainer");
	render.innerHTML = htmlElement;

	// varables to send to the typewriter
	let tortoiseText = document.getElementById("tortoiseText");
	let buttons = document.getElementById("button");

	// runs the Typewriter
	let typewriter = new Typewriter(
		props.string,
		props.delay,
		props.pause,
		tortoiseText,
		buttons,
		textId,
		props.timeout,
		callToEvents
	);
	typewriter.start();
}
