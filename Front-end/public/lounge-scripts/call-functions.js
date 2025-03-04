import fetchData from "./get-data.js";
import BuildCharacter from "./buildCharacter.js";
import fetchBackground from "./set-background.js";

async function callFunctions() {
	await fetchData().then((res) => {
		fetchBackground();
		let user = new BuildCharacter("characterCanvas", res);
		user.draw();
	});
}

callFunctions();

//let intruder = new BuildCharacter("intruderCanvas");
//intruder.fetchData("http://localhost:3000/data"); //dummy route on server
