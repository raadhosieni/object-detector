let objectDetector;
let video;
let detections = [];
let videoLoaded = false;

function preload() {
  objectDetector = ml5.objectDetector("cocossd");
}

function loadedModel() {
  objectDetector.detect(video, gotDetections);
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
  video = createCapture(VIDEO);
  video.hide();
  video.size(600, 400);
}

function draw() {
  image(video, 0, 0);

  if (!videoLoaded && video.loadedmetadata) {
    objectDetector.detect(video, gotDetections);
    videoLoaded = true;
  }

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
