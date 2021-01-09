var SCENE = {
	testroom: {
		sceneobject: OBJECT.sceneTESTROOM,
		objects: [],
		ghosts: [],
		exits: [],
		visited: false,
		img: null
	}
};

var kids = {
	current: null,
	kitty: {
		info: `<mark>kitty</mark>
			<br /><br />
			the ghost whisperer<br /><br />
			age: 11<br /><br />
			inventory: two <a onclick="t('kittyglowsticks')">industrial glow sticks</a>, one glitter bomb, an invisible ink marker + <a onclick="t('bluelightflashlight')">blue light flashlight</a>, and one mickey mouse light-up watch`,
		menu: [ICON.inventory, ICON.listen],
		inventory: [OBJECT.kGLOWSTICK, OBJECT.kGLOWSTICK, OBJECT.kBOMB, OBJECT.kSPYPEN, OBJECT.kWATCH],
		bgcolor: "#fff49d",
		strongcolor: "#ffe24f",
		scene: SCENE.testroom
	},
	pup: {
		info: `<mark>pup</mark>
			<br /><br />
			<a onclick="t('exghosthunter')">ex ghost hunter</a><br /><br />
			age: 13<br /><br />
			inventory: one <a onclick="t('pupshammer')">hammer</a>, one industrial glow stick, and one warm unwrapped ice cream sandwich`,
		menu: [ICON.inventory, ICON.fight],
		bgcolor: "#9dceff",
		strongcolor: "#4fcdff",
		scene: SCENE.testroom
	},
	bird: {
		info: `<mark>bird</mark>
			<br /><br />
			self-proclaimed ghost scholar<br /><br />
			age: 12<br /><br />
			inventory: <a onclick="t('necromancershandbook')">the necromancer's handbook</a>, four warm unwrapped <a onclick="t('icecreamsandwiches')">ice cream sandwiches</a>, the quill of Sa, and two erasable ballpoint pens`,
		menu: [ICON.inventory, ICON.handbook],
		bgcolor: "#ff9db7",
		strongcolor: "#ff4f90",
		scene: SCENE.testroom
	}
}