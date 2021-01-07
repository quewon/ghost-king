var kid_menu = {
	kitty: `<button onclick="print(kid,1)" style="margin-right:var(--margin-size)">walk</button><button>listen</button>`,
	pup: `<button onclick="print(kid,1)" style="margin-right:var(--margin-size)">walk</button><button>fight</button>`,
	bird: `<button onclick="print(kid,1)" style="margin-right:var(--margin-size)">walk</button><button>handbook</button>`
}

var kid_info = {
	kitty: `<mark>kitty</mark>
			<br /><br />
			the ghost whisperer<br /><br />
			age: 11<br /><br />
			inventory: two <a onclick="t('kittyglowsticks')">industrial glow sticks</a>, one glitter bomb, an invisible ink marker + <a onclick="t('bluelightflashlight')">blue light flashlight</a>, and one mickey mouse light-up watch`,
	pup: `<mark>pup</mark>
			<br /><br />
			<a onclick="t('exghosthunter')">ex ghost hunter</a><br /><br />
			age: 13<br /><br />
			inventory: one <a onclick="t('pupshammer')">hammer</a>, one industrial glow stick, and one warm unwrapped ice cream sandwich`,
	bird: `<mark>bird</mark>
			<br /><br />
			self-proclaimed ghost scholar<br /><br />
			age: 12<br /><br />
			inventory: <a onclick="t('necromancershandbook')">the necromancer's handbook</a>, four warm unwrapped <a onclick="t('icecreamsandwiches')">ice cream sandwiches</a>, the quill of Sa, and two erasable ballpoint pens`
};

var DIALOG = {};
DIALOG.kitty = [
	0,
	`there is nothing around for miles. only [[t: kitty]]you[[/t]], and this heat, and the water running under your feet.<br /><br />
	the ghosts, they led you here. what will you find, you wonder, what will you hear?<<`,
];

var TOOLTIP = {
	kittyglowsticks: `you're never fully geared up without these. someone once asked you why you've always got one with you: is it a fear of darkness or do you just like the glow? you've never thought about it.`,
	bluelightflashlight: `used more often, unfortunately, to spy on ghosts than to decode secret messages. it doesn't help that the rest of the team has refused to use their own invisible ink pens.`,
	pupshammer: `worn, but sturdy. reliable. crushes clay in one hit. hasn't failed you yet.`,
	exghosthunter: `frankly: you're still a hunter, in your mind. but meeting <a onclick="t('fisher')">fisher</a> made you less proud of that name.`,
	necromancershandbook: `you must have begged <a onclick="t('fisher')">fisher</a> for years. it was only after you asked Sa herself if She had a copy that fisher finally let you copy her files. that's right, this is a bona-fide necromancy ritualbook.`,
	icecreamsandwiches: `the goddess of death likes gelato. yeah, you didn't know what to make of that, either.`,
	fisher: `... nobody likes to talk about what happened to fisher.`,
	kitty: `and this eerie silence`
};