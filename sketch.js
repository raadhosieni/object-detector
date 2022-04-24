let objectDetector;
let video;

function setup() {
  createCanvas(600, 400);
  video = createCapture(VIDEO);
  video.hide();
  objectDetector = ml5.objectDetector("cocossd");
}

function draw() {
  image(video, 0, 0, width, height);
  objectDetector.detect(video, gotDetections);
}

function gotDetections(err, results) {
  if (err) {
    console.log(err);
  }

  for (let i = 0; i < results.length; i++) {
    const object = results[i];
    noFill();
    stroke(0, 255, 0);
    strokeWeight(3);
    rect(object.x, object.y, boject.width, object.height);
  }
}
