import formatHtml from "./format-html.js";
import { animate, setStop } from "./animate.js";
import { content } from "./content.js";

//JM creates event listeners for the array of content
animate();
export default function formatEvents(contents, data, callBack, callBack2) {
	let i = 0;
	wrapper(contents, data, callBack);
	function wrapper(contents, data, callBack) {
		console.log("first line", i);

		function callNextMessage() {
			setStop(true);
			callBack2(false);

			if (contents[i].timeout) {
				i++;
				setTimeout(() => {
					setStop(false);
					callBack2(true);
				}, contents[i].pause[0]);
				wrapper(contents, data, callBack);
			}
		}
		//console.log(contents[i].loading);
		if (i < contents.length) {
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

export function formatLoungeEvents(contents, data, callBack) {
	console.log("first line", i);
	//console.log(contents[i].loading);

	function callNextMessage() {
		if (contents[i].timeout) {
			i++;
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
		console.log("else at end", data);
		i = 0;
		if (callBack) callBack(data);
	}
}
