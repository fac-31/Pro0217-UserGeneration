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
				id: "coffeeMug",
				content: "Coffee Mug",
				event: "click",
				handler: "",
			},
			{
				id: "plantPot",
				content: "Plant Pot",
				event: "click",
				handler: "",
			},
			{
				id: "tvRemote",
				content: "TV Remote",
				event: "click",
				handler: "",
			},
			{
				id: "lampShade",
				content: "Lamp Shade",
				event: "click",
				handler: "",
			},
			{
				id: "looseChange",
				content: "Loose Change",
				event: "click",
				handler: "",
			},
			{
				id: "phoneCharger",
				content: "Phone Charger",
				event: "click",
				handler: "",
			},
		],
	},

	winnerMessage: {
		string:
			"~You won!~ You successfully defended your living room!~ Stay here as long as you like, or create another character.",
		type: "select",
		pause: [2000, 1000, 1000],
		delay: 40,
		events: [
			{
				id: "backToHome",
				content: "Create another character",
				event: "click",
				handler: "window.location.href='/'",
			},
		],
	},
};
