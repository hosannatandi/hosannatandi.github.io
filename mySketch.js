//global variable:
var size = 10; // declaring a global variable
var grow = 10; // how much do we grow each frame
var transparency = 20 // how transparent are the circles
function setup() {
	createCanvas(600, 500);
	background('orange');
}
function draw() {
	// local variables:
	var r = mouseX/ width * (255)
	var g = mouseX/ height * (255)
	var b = random (255)
	fill (r,g,b, transparency)
	ellipse(mouseX, mouseY, size, size);
	size = size + grow
	if (size>200) grow = -grow; // test to see if were too big
	if (size<1) grow = -grow;// see if were too small
console.log(size) // debugging 
}