export const deathcontent = {
	youDead: {
		string:
        "~I think you dead..............~ So......~Let's build you another character!",
        type: "select",
        pause: [1000, 500],
        delay: 40,
        events: [
            {
                id: "returntocreate",
                content: "Go back in time!",
                event: "click",
                handler: "window.location.href='/'", 
            },
        ],
    }
}