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
	/* 
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
 */
	outfitContent: {
		string: "~Pick a combination of colors!~",
		key: "outfit",
		type: "select",
		pause: [1000],
		delay: 40,
		events: [
			{
				id: "Red&Green",
				content: "Red & Green",
				event: "click",
				handler: "",
			},
			{
				id: "Blue&Yellow",
				content: "Blue & Yellow",
				event: "click",
				handler: "",
			},
			{
				id: "Beige&Blue",
				content: "Beige & Blue",
				event: "click",
				handler: "",
			},
		],
	},

	/* 	bootsContent: {
		string:
			"~... We're definitely going to need shoes with this!~ What color boots would you like?",
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
	}, */

	/* skinContent: {
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
	}, */

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

	loading1: {
		string: `~So... anyone here ever try to race a snail? It’s like, whoa, slow down, buddy, this is my thing`,
		loading: true,
		type: "read",
		pause: [1000],
		delay: 60,
		timeout: 1000,
	},

	loading2: {
		string: `~If you need a coaster, I can just, you know, lie here. I’m basically a walking coffee table `,
		loading: true,
		type: "read",
		pause: [1000],
		delay: 60,
		timeout: 1000,
	},
	loading3: {
		string: `~Anyone want to help me with my speed workout? It’s mostly... standing up... and then reconsidering. `,
		loading: true,
		type: "read",
		pause: [1000],
		delay: 60,
		timeout: 1000,
	},
	loading4: {
		string: `~I’d offer snacks, but all I’ve got is lettuce. And like, the enthusiasm to hand you lettuce `,
		loading: true,
		type: "read",
		pause: [1000],
		delay: 60,
		timeout: 1000,
	},
	loading5: {
		string: `~I was going to organize a scavenger hunt, but then I remembered I’d have to move... so... yeah `,
		loading: true,
		type: "read",
		pause: [1000],
		delay: 60,
		timeout: 1000,
	},
};

//“If you’re bored, feel free to read me a story. Extra points if it’s about a tortoise winning some kind of race.”
//“Anyone else ever forget why they started moving somewhere... and then just give up and call it a nap?”
//“I could show you my dance moves, but they mostly look like... standing in place. With intention.”
//“Oh, you’re all standing? Pff, overachievers.”
