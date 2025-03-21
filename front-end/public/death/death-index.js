import { deathcontent } from "./death-content.js";
import formatEvents from "../../index/format-events.js";

const mainContent = document.getElementById("mainContent");
mainContent.style.backgroundImage = "url('/death/ghostTortoise.png')";

const contents = [deathcontent.youDead];

formatEvents(contents, {}, () => {
	console.log("Event sequence completed.");
});
