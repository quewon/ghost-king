var OBJECT = {
	kGLOWSTICK: {
		name: "industrial glow stick",
		line: "a [glow stick] on the ground.",
		kitty: `you're never fully geared up without these. someone once asked you why you've always got one with you: is it a fear of darkness or do you just like the glow? you've never thought about it.`
	},
	kBOMB: {
		name: "glitter bomb",
		line: "a bunch of [glitter] strewn about, to someone's dismay."
	},
	kSPYPEN: {
		name: "invisible ink marker + blue light flashlight",
		line: "there's an [invisible ink pen].",
		kitty: `used more often, unfortunately, to spy on ghosts than to decode secret messages. it doesn't help that the rest of the team has refused to use their own invisible ink pens.`
	},
	kWATCH: {
		name: "mickey mouse light-up watch",
		line: "someone's left a [cute watch] here."
	},

	pHAMMER: {
		name: "hammer",
		line: "a [hammer] is buried in the ground.",
		pup: `worn, but sturdy. reliable. crushes clay in one hit. hasn't failed you yet.`
	},

	bHANDBOOK: {
		name: "necromancer's handbook",
		line: "an old, worn [college ruled notebook] is sitting here.",
		bird: `you must have begged <a onclick="t(DIALOGUE.fisher)">fisher</a> for years. it was only after you asked Sa herself if She had a copy that fisher finally let you copy her files. that's right, this is a bona-fide necromancy ritualbook.`
	},
	bQUILL: {
		name: "quill of Sa",
		line: "the [quill of Sa]."
	},
	bPEN: {
		name: "erasable ballpoint pen",
		line: "a [pen]."
	},

	iICECREAMSANDWICH: {
		name: "ice cream sandwich",
		line: "there's a melting [ice cream sandwich] on the ground.",
		bird: `the goddess of death likes gelato. yeah, you didn't know what to make of that, either.`
	},

	sOASIS: {
		name: "an oasis",
		line: "around you is a small oasis. it's a lonely pond and a small [bridge].",
		kitty: [1, `<a onclick="t(DIALOGUE.fisher)">fisher</a>'s gone and you've got nowhere to go. you spend your days wandering aimlessly, following the slightest whispers.<br /><br />the ghosts, they led you here. now there's nothing. only you, this heat, and the water running under your feet.`, ""]
	},
	sDESERT: {
		name: "sand",
		line: "your footsteps are swept away by the light breeze. days pass just walking."
	},

	eDESERT: {
		line: "the vast [desert] invites you to wander deeper in.",
		destination: "desert"
	},
	eOASIS: {
		line: "an [oasis] glitters in the distance.",
		destination: "oasis"
	},
	eWALL: {
		line: "at the end of your vision, a [stone wall] like a shadow.",
		destination: "outer_wall"
	}
};