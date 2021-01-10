var SCENE = {
	oasis: {
		sceneobject: OBJECT.sOASIS,
		objects: [],
		ghosts: [],
		exits: [OBJECT.eDESERT],
		visited: false,
		img: null
	},
	desert: {
		sceneobject: OBJECT.sDESERT,
		objects: [],
		ghosts: [],
		exits: [OBJECT.eOASIS, OBJECT.eWALL],
		visited: false,
		img: null
	}
};