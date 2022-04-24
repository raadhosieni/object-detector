let objectDetector;
let video;
let detections = [];

function preload() {
  objectDetector = ml5.objectDetector("cocossd");
  video = createCapture(VIDEO);
}

function gotDetections(err, results) {
  if (err) {
    alert(err);
  }

  detections = [...results];

  objectDetector.detect(video, gotDetections);
}

function setup() {
  createCanvas(600, 400);
  video.hide();
  video.size(600, 400);
  if (video.loadedmetadata) {
    objectDetector.detect(video, gotDetections);
  }
}

function draw() {
  image(video, 0, 0);

  detections.forEach((element) => {
    stroke(0, 255, 0);
    strokeWeight(4);
    noFill();
    rect(element.x, element.y, element.width, element.height);
    noStroke();
    fill(255);
    textSize(18);
    text(element.label, element.x + element.width / 2, element.y + 20);
  });
}
