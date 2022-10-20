function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();

}

function preload(){
img = loadImage('1.jpg');

}

function draw(){
image(img, 0,0, 640, 420);
fill('#FF0000');
text("Bottle", 40, 30);
noFill();
stroke('#FF0000');
rect(30, 10, 550, 390);
}