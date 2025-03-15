export const content = {
	introContent: {
		string: "~What do you think of this format?",
		type: "select",
		pause: [2000],
		delay: 40,
		events: [
			{
				id: "formRoute",
				content: "I prefer a simple form",
				event: "click",
				handler: "window.location.href='/create.html'",
			},
			{
				id: "button1",
				content: "I'm liking it!",
				event: "click",
				handler: "",
			},
		],
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
		string: "~What color outfit would you like?",
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
		string: "~What color boots would you like?",
		key: "boots",
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
};
