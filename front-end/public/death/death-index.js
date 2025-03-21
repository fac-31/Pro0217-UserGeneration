import { deathcontent } from "./death-content.js";
import formatEvents from "../index/format-events.js";

const container = document.getElementById("deathContainer");
container.classList.add("fade-in");

const mainContent = document.getElementById("deathMainContent");
mainContent.style.backgroundImage = "url(../death/ghostTortoise.png)";

const contents = [deathcontent.youDead];

formatEvents(contents, {}, logEnd, logEnd);

function logEnd() {
	console.log("end of death");
}
