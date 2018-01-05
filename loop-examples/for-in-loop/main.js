let person = {
	name: "Jeff",
	haircolor: "Black",
	eyecolors: "Hazel"
};

let text = "";

for (let x in person) {
	text += person[x] + "<br>";
}

document.getElementById("text").innerHTML = text;