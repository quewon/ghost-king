var SCENE = {
	oasis: {
		sceneobject: {
			name: "an oasis",
			line: "around you is a small oasis. it's a lonely pond and a small [bridge].",
			kitty: [1, `<a onclick="t(DIALOGUE.fisher)">fisher</a>'s gone and you've got nowhere to go. you spend your days wandering aimlessly, following the slightest whispers.<br /><br />the ghosts, they led you here. now there's nothing. only you, this heat, and the water running under your feet.`, ""]
		},
		exits: [
			{
				line: "the vast [desert] invites you to wander deeper in.",
				destination: "desert"
			}
		],
		visited: false,
		img: null
	},
	desert: {
		sceneobject: {
			name: "sand",
			line: "your footsteps are swept away by the light breeze. days pass just walking."
		},
		exits: [
			{
				line: "an [oasis] glitters in the distance.",
				destination: "oasis"
			},
			{
				line: "at the end of your vision, a [stone wall] like a shadow.",
				destination: "stone_wall"
			},
		],
		visited: false,
		img: null
	},
	stone_wall: {
		sceneobject: {
			name: "a stone wall",
		},
		objects: [OBJECT.ICECREAMSANDWICH],
		ghosts: [],
		exits: [
			{
				line: "on one side of this wall, the vast [desert].",
				destination: "desert",
			},
			{
				line: "on the other... [is this wall grumbling]?",
				destination: "wall_golem"
			}
		],
		visited: false,
		img: null
	},
	wall_golem: {
		sceneobject: {
			name: "wall golem",
			line: "the wall is a [golem].<br /><br />HEY, it says, WATCH WHERE YOU'RE GOING, LADY.<br /><br /><i>that's it for now...! more to come</i>",
			kitty: [1, `should you be surprised you didn't realize sooner? you hear ghosts, not golems, even if they are just ghosts in clay costumes. plus, you've... never seen a golem so big. it's scary big.`, ""]
		},
		visited: false,
		img: null
	}
};