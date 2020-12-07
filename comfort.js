var voice = new p5.Speech ();
var recognize = new p5.SpeechRec ();
var picturesize = 1;
var words = ['you can do it', 'do not worry ', 'it will be okay', 'time fixes everything',
						 'take care of yourself', 'love yourself', 'you are worthy of your dreams',
						 'I love you', 'there is no rush', 'the universe got your back', 'no one is perfect',
						 'everyone makes mistakes', 'you matter', 'be yourself', 'speak up for yourself',
						 'it is okay to fail', 'trust yourself', 'you are in control']
var direction = ['listen to your heart']
var img;

function preload() {
	bg = loadImage ("pretty.jpg")
}
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(bg);
	img=loadImage('Aha-Soft-Free-Large-Love-Heart.ico');
	recognize.continuous = true;
	recognize.interimResults = true;
	recognize.onResult = speechresult;
	recognize.start();

}

function draw() {
	background(bg);
	image(img,590,200, img.width*picturesize, img.height*picturesize);
}
function mousePressed() {
	if (mouseX>600 && mouseX<850 && mouseY>200 && mouseY<410) {
    voice.speak(random(words));
  } 
	else {
  	voice.speak(direction)
  }

}
function speechresult()
{
if(recognize.resultString.search('I love myself')>-1)
{
console.log("MATCH");
picturesize = picturesize*1.1;
}
console.log(recognize.resultString);
}