export const introContent = {
	string: "What do you think of this format?",
	type: "select",
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
};

export const hatContent = {
	string: "What color hat would you like?",
	type: "select",
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
};

export const outfitContent = {
	string: "What color outfit would you like?",
	type: "select",
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
};

export const bootsContent = {
	string: "What color boots would you like?",
	type: "select",
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
};

export const skinContent = {
	string: "What color skin would you like?",
	type: "select",
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
};

export const bioContent = {
	string: "Tell me a bit about yourself",
	type: "text",
	id: "biography",
	inputId: "bioValue",
	events: "keydown",
};

export const nameContent = {
	string: "What's your name?",
	type: "text",
	id: "name",
	inputId: "nameValue",
	events: "keydown",
};
