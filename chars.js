var CHAR = {
	WALL_GOLEM: {
		name: "wall golem",
		scene: "wall_golem",
		line: "this wall is a [golem].",
		state: {
			neutral: {
				kitty: [1, "HEY, KITTY. REMEMBER ME? ... AH, I DON'T BLAME YA. THIS SWEET NEW BODY OF MINE DOESN'T REALLY, WELL, GET AROUND. ... KNOW WHAT I MEAN?", "I GOTTA SAY, KITTY, IT'S SO MUCH BETTER THAN BEING INVISIBLE ALL THE TIME. I THINK.", "I CAN TALK AT SO MANY PEOPLE NOW! EVEN PEOPLE THAT DON'T HAPPEN TO HAVE THE INNATE ABILITY TO HEAR GHOSTS! ALTHOUGH, YOU'RE THE ONLY ONE THAT'S STAYED AND LISTENED FOR SO LONG...", "ANYWAY, YOU GET A PASS."]
			}
		}
	},
	KITTY: {
		name: "kitty",
		scene: "oasis",
		line: "it's [kitty].",
		state: {
			neutral: {
				line: "there's something different about her.",
				bird: "hey, bird.",
				pup: "heya, pup."
			}
		},
		exclusive: ["bird", "pup"]
	},
	PUP: {
		name: "pup",
		scene: "testroom",
		line: "it's [pup].",
		state: {
			neutral: {
				line: "he looks surprised to see you.",
				kitty: "kitty.",
				bird: "bird."
			}
		},
		exclusive: ["kitty", "bird"]
	},
	BIRD: {
		name: "bird",
		scene: "testroom",
		line: "it's [bird].",
		state: {
			neutral: {
				line: "he's not doing so hot, is he?",
				kitty: "kitty? what are you doing here?",
				pup: "pup? what are you doing here?"
			}
		},
		exclusive: ["kitty", "pup"]
	}
};