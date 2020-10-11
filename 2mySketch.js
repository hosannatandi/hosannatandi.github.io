
var transparency = 20
function setup() {
	createCanvas(700, 500);
	background(175,238,238);
}

function draw() {
	var r = mouseX/width * 255;
	var g = mouseY/height * 255;
	var b = random(255);
	stroke(255, transparency*4);
	fill(r, g, b, transparency);
	quad(mouseX, mouseY,150, 124,624,154,200,300);
	fill (255,0,0,50)
}
function keyTyped()
{
	background(0);
	if (key === 'r') {
	background("red");
	}
	if (key === 'b') {
	background("blue");
	}
	if (key === 'y') {
	background("yellow");
	}
	if (key === 'g') {
	background("green");
	}
}

// I got the information on how to change the shape color from 0302rectmode sketch