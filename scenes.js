var SCENE = {
	oasis: {
		sceneobject: {
			name: "an oasis",
			line: "around you is a small oasis. it's a lonely pond and a small [bridge].",
			kitty: [1, `<a onclick="t(DIALOGUE.fisher)">fisher</a>'s gone, the team's broken up, and you've got nowhere to go. you spend your days wandering aimlessly, following the slightest whispers.<br /><br />the ghosts, they led you here. now there's nothing. only you, this heat, and the water running under your feet.`, "it's kind of a cute bridge.", "ANYWAY, YOU GET A PASS."]
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
		exits: [
			{
				line: "on one side of this wall, the [desert].",
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
			name: "wall golem"
		},
		exits: [
			{
				line: "you ask the golem if you can [pass].",
				destination: "outer_wall"
			}
		]
	},
	outer_wall: {
		sceneobject: {
			name: "inside the outer wall",
			line: "<i>end of content...! more to come</i>"
		},
		exits: [
			{
				line: "the [wall golem] stands proud. sort of."
			}
		]
	},

	testroom: {
		sceneobject: {
			name: "test room",
			line: "hey... u shouldn't be here. quick, get back to the game before somebody notices."
		},
		visited: false,
		img: null
	}
};