import Typewriter from "./typewriter.js";
//newStory(htmlElement, choiceElement, string, delay, pause)

export default function typeIntro(props) {
	let input = "";
	let textId;

	if (props.type === "text") {
		textId = props.id;
		input = `
        <textarea id=${props.id} class="input-text"></textarea>`;
	} else if (props.type === "select") {
		for (let i = 0; i < props.events.length; i++) {
			input += `<button id=${props.events[i].id} onclick=${props.events[i].handler} >
            ${props.events[i].content}
            </button>`;
		}
	}

	let htmlContent = `
    <p class="tortoise-text" id="tortoiseText"></p>
    <div class="button-container hidden" id="button">
        ${input}
    </div>`;

	let render = document.getElementById("storyContainer");
	render.innerHTML = htmlContent;

	let tortoiseText = document.getElementById("tortoiseText");
	let buttons = document.getElementById("button");
	let string = props.string;

	let pause = [];
	let typewriter = new Typewriter(
		string,
		40,
		pause,
		tortoiseText,
		buttons,
		textId
	);
	typewriter.start();
}
