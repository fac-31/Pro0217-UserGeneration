async function fetchBackground() {
	console.log("about to fetch background");
	let url;
	try {
		url = await fetch("http://localhost:3000/background-image").then((res) =>
			res.json()
		);
		console.log(url);

		//if (!response.ok) {
		//	throw new Error("Failed to fetch background image");
		//}
	} catch (error) {
		console.error(error);
	}
	console.log("returning image", url);
	displayImage(url.url);
}

export default function displayImage(url) {
	const body = document.querySelector("body");
	body.style.backgroundImage = `url(${url})`;
}
