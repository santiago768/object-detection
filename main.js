function preload() {
    img = loadImage("dog_cat2.jpg");
}

function setup() {

    canvas = createCanvas(640, 420);
    canvas.center();
    objectdetector = ml5.objectDetector("cocossd", modelloded);
}
function draw() {
    image(img,0,0,640,420);
}

function modelloded() {
    console.log("model loded succesfuly");
    
}