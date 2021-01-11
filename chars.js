var CHAR = {
	WALL_GOLEM: {
		name: "wall golem",
		scene: "stone_wall",
		line: "this wall is a [golem].",
		state: {
			current_state: 'neutral',
			neutral: {
				line: "it only stops grumbling when you notice it.",
				kitty: "HEY KITTY. HOW'S IT GOING?"
			}
		},
		kitty: [1, `should you be surprised you didn't realize sooner? you hear ghosts, not golems, even if they are just ghosts in clay costumes. plus, you've... never seen a golem so big. it's scary big.`, ""]
	},
	KITTY: {
		name: "kitty",
		scene: "oasis",
		line: "it's [kitty].",
		state: {
			current_state: 'neutral',
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
			current_state: 'neutral',
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
			current_state: 'neutral',
			neutral: {
				line: "he's not doing so hot, is he?",
				kitty: "kitty? what are you doing here?",
				pup: "pup? what are you doing here?"
			}
		},
		exclusive: ["kitty", "pup"]
	}
};