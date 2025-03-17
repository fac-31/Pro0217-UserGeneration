async function fetchBackground() {
	console.log("about to fetch background");
	let url;
	try {
		url = await fetch("/background-image").then((res) => //http://localhost:3000/background-image"
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
	const background = document.getElementById("mainContent");
	background.style.backgroundImage = `url(${url})`;
}
