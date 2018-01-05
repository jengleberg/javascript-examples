var names = ["Jeff", "Jon", "Jane", "Kevin", "June"];
var text = "";

for (var i = 0; i < names.length; i++) {
	text += names[i] + "<br>";
}

document.getElementById("text").innerHTML = text;