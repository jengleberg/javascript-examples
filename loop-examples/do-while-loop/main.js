var text = "";
var x = 0;

do {
	text += x + "<br>";
	x++;
} while (x < 10);


document.getElementById("text").innerHTML = text;