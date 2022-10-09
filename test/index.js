import { drag } from "../ComponentJS/drag.js";
drag("drag3", 500, 700);
drag("drag2");
drag("drag1", 500, 700);
function test(m) {
	m = { v: 5 };
	console.log(m);
}
var m = { k: 30 };
test(m);
console.log(m.v);
console.log(m);
