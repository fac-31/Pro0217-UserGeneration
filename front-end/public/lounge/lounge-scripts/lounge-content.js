export const content = {
	loungeIntro1: {
		string: "~Welcome to your personal living room!~ I hope you like it",
		type: "read",
		pause: [2000, 500],
		delay: 60,
		timeout: 1000,
	},

	intruderAlert: {
		string: "~But wait!~ What's that shadow behind the sofa?",
		type: "select",
		pause: [2000, 1000],
		delay: 40,
		events: [
			{
				id: "checkForIntruder",
				content: "Let's take a look",
				event: "click",
				handler: "",
			},
		],
	},

	pickWeapon: {
		string: "~It's an intruder!~ Quick!~ Pick a weapon to defend yourself!",
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
	},
};

