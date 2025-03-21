import formatHtml from "./format-html.js";
import { animate, setStop } from "./animate.js";

//JM creates event listeners for the array of content
animate();
export default function formatEvents(contents, data, callBack, callBack2) {
	let i = 0;
	wrapper(contents, data, callBack);
	function wrapper(contents, data, callBack) {
		//console.log("first line", i);
		function callNextMessage() {
			setStop(true);
			callBack2(false);

			if (contents[i].timeout) {
				//console.log(contents);
				i++;
				setTimeout(() => {
					setStop(false);
					callBack2(true);
				}, contents[i].timeout);

				wrapper(contents, data, callBack);
			}
		}
		if (i < contents.length) {
			//console.log(contents[i].loading);
			setTimeout(() => {
				setStop(false);
				callBack2(true);
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
								wrapper(contents, data, callBack);
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
						wrapper(contents, data, callBack);
					}
				});
			}
		} else {
			console.log("else at end", data);
			if (callBack) callBack(data);
		}
	}
}
