import formatHtml from "./format-html.js";
import { animate, setStop } from "./animate.js";

//JM creates event listeners for the array of content
let i = 0;
animate();
export default function formatEvents(contents, data, callBack) {
	function callNextMessage() {
		setStop(true);
		if (contents[i].timeout) {
			i++;
			setTimeout(() => {
				setStop(false);
			}, contents[i].pause[0]);
			formatEvents(contents, data, callBack);
		}
	}
	if (i < contents.length) {
		setTimeout(() => {
			setStop(false);
		}, contents[i].pause[0]);
		formatHtml(contents[i], callNextMessage);

		//JM event listener for buttons
		if (contents[i].type === "select") {
			contents[i].events.forEach(({ id, event, eventCall }) => {
				const element = document.getElementById(id);
				if (element) {
					element.addEventListener(event, () => {
						if (eventCall) {
							console.log("call end");
							callBack();
						} else {
							if (contents[i].key) {
								data[contents[i].key] = id;
							}
							i++;
							formatEvents(contents, data, callBack);
						}
					});
				}
			});
		}

		//JM event listener for text input
		if (contents[i].type === "text") {
			const element = document.getElementById(contents[i].id);
			element.addEventListener(contents[i].events, (e) => {
				if (e.key === "Enter") {
					data[contents[i].key] = element.value;
					i++;
					formatEvents(contents, data, callBack);
				}
			});
		}
	} else {
		console.log(data);
		if (callBack) callBack(data);
		i = 0;
	}
}
