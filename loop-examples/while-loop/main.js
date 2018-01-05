var names = ["Jeff", "John", "Jane", "Bill", "Bob"]
var text = "";
var x = 0;

while (x < names.length) {
	text += names[x] + "<br>";
	x = x + 1;
}

document.getElementById("text").innerHTML = text;