var ICON = {
	inventory: {
		name: "🎒",
		tooltip: "check inventory",
		function: function() {
			output = parseList("inventory", kids[kids.current].inventory)+"<br /><br /><i>right click items to unload them</i>";
			t(output)
		}
	},
	listen: {
		name: "👂",
		tooltip: "tune into the ghosts",
		function: function() {
			console.log("listening")
		}
	},
	fight: {
		name: "👊",
		tooltip: "pick a fight",
		function: function() {
			console.log("fight")
		}
	},
	handbook: {
		name: "📓",
		tooltip: "look up an entry in the necromancer's handbook",
		function: function() {
			//toggle handbook
			console.log("handbook")
		}
	}
};

var numbers = {
	a: ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '],
	b: ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety']
};

function inWords(num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (numbers.a[Number(n[1])] || numbers.b[n[1][0]] + ' ' + numbers.a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (numbers.a[Number(n[2])] || numbers.b[n[2][0]] + ' ' + numbers.a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (numbers.a[Number(n[3])] || numbers.b[n[3][0]] + ' ' + numbers.a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (numbers.a[Number(n[4])] || numbers.b[n[4][0]] + ' ' + numbers.a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (numbers.a[Number(n[5])] || numbers.b[n[5][0]] + ' ' + numbers.a[n[5][1]]) : '';
    return str;
}

function parseList(t, list) {
	let inv = {};
	for (let i=0; i<list.length; i++) {
		if (!(list[i].name in inv)) {
			inv[list[i].name] = [1, list[i], i];
		} else {
			inv[list[i].name][0]++
		}
	}
	let output = t+": ";
	let keys = Object.keys(inv);
	for (let i=0; i<keys.length; i++) {
		let k = keys[i];
		if (inv[keys[i]][0] > 1) {
			k = keys[i]+"s"
		}

		output += "<p oncontextmenu=\"dropItem('"+inv[keys[i]][2]+"');return false\">";
		output += inWords(inv[keys[i]][0])
		if (kids.current in inv[keys[i]][1]) {
			let string = inv[keys[i]][1][kids.current];
			if (string.includes(">")) {
				let i = broken_tooltips.length;
				broken_tooltips.push(inv[keys[i]][1][kids.current]);
				output += '<a onclick="t(broken_tooltips['+i+'])">'+k+'</a>';
			} else {
				output += '<a onclick="t(\`'+inv[keys[i]][1][kids.current]+'\`)">'+k+'</a>';
			}
		} else {
			output += k;
		}
		output += "</p>";

		if (i<keys.length-1) {
			output += ", ";
			if (i==keys.length-2) {
				output+="and "
			}
		}
	}
	return output;
}