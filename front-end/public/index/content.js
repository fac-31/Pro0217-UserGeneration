export const content = {
	intro1: {
		string:
			"~Oh!~ Hello!~ I didn't see you there.~ I guess It's my eyes...~ I'm getting rather old...",
		type: "read",
		pause: [2000, 1000, 500, 1000, 1000],
		delay: 60,
		timeout: 1000,
	},

	intro2: {
		string:
			"~Enough about me! What brings you here?~ You want me to build you a living room!?",
		type: "read",
		pause: [1000, 3000],
		delay: 60,
		timeout: 1000,
	},

	intro3: {
		string: "~...It might take me a while, but okay.",
		type: "read",
		pause: [1000],
		delay: 60,
		timeout: 1000,
	},

	introContent: {
		string:
			"~ Now, do you want me to design a personalised living room just for you? Or are you happy with whatever I feel like building?",
		type: "select",
		pause: [1000],
		delay: 50,
		events: [
			{
				id: "buildUser",
				content: "I want you to build one just for me!",
				event: "click",
				handler: "",
			},
			{
				id: "randomCharacter",
				content: "I'm happy with whatever",
				event: "click",
				handler: "",
			},
		],
	},

	build1: {
		string: "~Ok.~ Looks like I'll have to get to know you a bit!",
		type: "read",
		pause: [1000, 1000],
		delay: 60,
		timeout: 1000,
	},

	build2: {
		string:
			"~I don't mean to be rude, but I think I'd like to make you an outfit to match you living room.~ So...",
		type: "read",
		pause: [1000, 500],
		delay: 60,
		timeout: 1000,
	},

	hatContent: {
		string: "~What color hat would you like?",
		key: "hat",
		type: "select",
		pause: [1000],
		delay: 40,
		events: [
			{
				id: "red",
				content: "Red",
				event: "click",
				handler: "",
			},
			{
				id: "green",
				content: "Green",
				event: "click",
				handler: "",
			},
			{
				id: "blue",
				content: "Blue",
				event: "click",
				handler: "",
			},
		],
	},

	outfitContent: {
		string: "~And what color outfit would you like?",
		key: "outfit",
		type: "select",
		pause: [1000],
		delay: 40,
		events: [
			{
				id: "red",
				content: "Red",
				event: "click",
				handler: "",
			},
			{
				id: "green",
				content: "Green",
				event: "click",
				handler: "",
			},
			{
				id: "blue",
				content: "Blue",
				event: "click",
				handler: "",
			},
		],
	},

	bootsContent: {
		string:
			"~... Wer'e definitely going to need shoes with this!~ What color boots would you like?",
		key: "boots",
		type: "select",
		pause: [1000, 500],
		delay: 40,
		events: [
			{
				id: "red",
				content: "Red",
				event: "click",
				handler: "",
			},
			{
				id: "green",
				content: "Green",
				event: "click",
				handler: "",
			},
			{
				id: "blue",
				content: "Blue",
				event: "click",
				handler: "",
			},
		],
	},

	skinContent: {
		string: "~What color skin would you like?",
		key: "skin",
		type: "select",
		pause: [1000],
		delay: 40,
		events: [
			{
				id: "red",
				content: "Red",
				event: "click",
				handler: "",
			},
			{
				id: "green",
				content: "Green",
				event: "click",
				handler: "",
			},
			{
				id: "blue",
				content: "Blue",
				event: "click",
				handler: "",
			},
		],
	},

	bioContent: {
		string: "~Tell me a bit about yourself",
		key: "biography",
		type: "text",
		pause: [1000],
		delay: 40,
		id: "biography",
		inputId: "bioValue",
		events: "keydown",
	},

	nameContent: {
		string: "~What's your name?",
		key: "name",
		type: "text",
		pause: [1000],
		delay: 40,
		id: "name",
		inputId: "nameValue",
		events: "keydown",
	},

	loading: {
		string: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, placeat maxime est excepturi odit id officia quaerat quis cumque nostrum sapiente illum, maiores soluta quisquam sed itaque tempora aspernatur molestias.`,

		type: "read",
		pause: [1000],
		delay: 60,
		timeout: 1000,
	},
};
