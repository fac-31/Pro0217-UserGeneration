import fetchData from "./get-data.js";
import BuildCharacter from "./buildCharacter.js";
import displayImage from "./set-background.js";

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
