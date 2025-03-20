export const intruderAlert = {
	string: "What's that shadow behind the sofa?",
	type: "select",
	pause: [2000],
	delay: 40,
	events: [
		{
			id: "checkForIntruder",
			content: "Let's take a look",
			event: "click",
			handler: "",
		},
		{
			id: "dontCheckForIntruder",
			content: "Relax. It's probably nothing",
			event: "click",
			handler: "",
		},
	],
};

export const pickWeapon = {
	string: "It's an intruder!~ Quick!~ Pick a weapon to defend yourself!",
	key: "weapon",
	type: "select",
	pause: [1000, 500, 500],
	delay: 40,
	events: [
		{
			id: "KittyLitterLauncher",
			content: "Kitty Litter Launcher",
			event: "click",
			handler: "",
		},
		{
			id: "DogTreatCatapult",
			content: "Dog Treat Catapult",
			event: "click",
			handler: "",
		},
		{
			id: "noisymegaphone",
			content: "Noisy Megaphone",
			event: "click",
			handler: "",
		},
	],
};

