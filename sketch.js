let objectDetector;
let video;

function preload() {
  objectDetector = ml5.objectDetector("cocossd", {}, modelLoaded);
  video = createCapture(VIDEO);
}

function modelLoaded() {
  console.log("model loaded");

  objectDetector.detect(video, gotDetections);
}

function gotDetections(err, results) {
  if (err) {
    console.log(err);
  }

  results.forEach((element) => {
    stroke(0, 255, 0);
    strokeWeight(4);
    noFill();
    rect(element.x, element.y, element.width, element.height);
    noStroke();
    fill(255);
    textSize(18);
    text(element.label, element.x + element.width / 2, element.y + 20);
  });

  objectDetector.detect(video, gotDetections);
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  image(video, 0, 0);
}
