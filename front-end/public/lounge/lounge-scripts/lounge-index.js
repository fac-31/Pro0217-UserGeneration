import fetchData from "./lounge-fetch-character.js";
import BuildCharacter from "./lounge-display-character.js";
import displayImage from "./lounge-fetch-background.js";

async function callFunctions() {
	await fetchData().then((res) => {
		console.log(res);
		displayImage(res.url);
		let user = new BuildCharacter("characterCanvas", res);
		user.draw();
	});
}

callFunctions();

//let intruder = new BuildCharacter("intruderCanvas");
//intruder.fetchData("http://localhost:3000/data"); //dummy route on server
