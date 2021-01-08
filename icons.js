var ICON = {
	inventory: {
		name: "🎒",
		tooltip: function() { return parseList(inventory.kitty) }
	},
	listen: {
		name: "👂",
		tooltip: "tune into the ghosts",
		function: function() {
			console.log("listening")
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

function parseList(list) {
	let inv = {};
	for (let i=0; i<list.length; i++) {
		if (!(list[i].name in inv)) {
			inv[list[i].name] = 1;
		} else {
			inv[list[i].name]++
		}
	}
	let output = "";
	let keys = Object.keys(inv);
	for (let i=0; i<keys.length; i++) {
		let k = keys[i];
		if (inv[keys[i]] > 1) {
			k = keys[i]+"s"
		}
		output += inWords(inv[keys[i]])+k;
		if (i<keys.length-1) {
			output += ", ";
			if (i==keys.length-2) {
				output+="and "
			}
		}
	}
	return output;
}