export const deathcontent = {
	youDead: {
		string:
			"~You died...~ And your character has been deleted from the database...~ So......~ Let's build you another character!",
		type: "select",
		pause: [1000, 1000, 2000, 1000],
		delay: 40,
		events: [
			{
				id: "returntocreate",
				content: "Go back in time!",
				event: "click",
				handler: "window.location.href='/'",
			},
		],
	},
};
