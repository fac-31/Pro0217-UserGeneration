export const content = {
	intro1: {
		string:
			"~Oh!~ Hello!~ I didn't see you there.~ Welcome to my living room!~",
		type: "read",
		pause: [2000, 1000, 500, 1000, 500],
		delay: 60,
		timeout: 1000,
	},

	intro2: {
		string:
			"~I Hear you're looking for somewhere to live.~ I can help you with that.",
		type: "read",
		pause: [1000, 1000],
		delay: 60,
		timeout: 1000,
	},

	intro3: {
		string:
			"~I'll Have to get to know you a bit first of course.~ I don't want to build you just any old living room",
		type: "read",
		pause: [1000, 1000],
		delay: 60,
		timeout: 1000,
	},

	outfitContent: {
		string: "~What kind of color scheme are you looking for?~",
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
		string: `~Great!~ I'll get started on your living room right away! In the meatime...~ erh...`,
		loading: true,
		type: "read",
		pause: [1000, 1500, 2000],
		delay: 60,
		timeout: 2000,
	},

	loading2: {
		string: `~So... anyone here ever try to race a snail? It’s like, whoa, slow down, buddy, this is my thing`,
		loading: true,
		type: "read",
		pause: [1000],
		delay: 60,
		timeout: 2000,
	},

	loading3: {
		string: `~If you need a coaster, I can just, you know, lie here. I’m basically a walking coffee table `,
		loading: true,
		type: "read",
		pause: [1000],
		delay: 60,
		timeout: 2000,
	},
	loading4: {
		string: `~Anyone want to help me with my speed workout? It’s mostly... standing up... and then reconsidering. `,
		loading: true,
		type: "read",
		pause: [1000],
		delay: 60,
		timeout: 2000,
	},
	loading5: {
		string: `~I’d offer snacks, but all I’ve got is lettuce. And like, the enthusiasm to hand you lettuce `,
		loading: true,
		type: "read",
		pause: [1000],
		delay: 60,
		timeout: 2000,
	},
	loading6: {
		string: `~I was going to organize a scavenger hunt, but then I remembered I’d have to move... so... yeah `,
		loading: true,
		type: "read",
		pause: [1000],
		delay: 60,
		timeout: 2000,
	},
};

//“If you’re bored, feel free to read me a story. Extra points if it’s about a tortoise winning some kind of race.”
//“Anyone else ever forget why they started moving somewhere... and then just give up and call it a nap?”
//“I could show you my dance moves, but they mostly look like... standing in place. With intention.”
//“Oh, you’re all standing? Pff, overachievers.”
