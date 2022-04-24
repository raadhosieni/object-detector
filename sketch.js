let objectDetector;
let video;
let x, y, w, h;

function modelLoaded() {
  objectDetector.detect(video, (err, results) => {
    console.log(results);
    x = results[0].x;
    y = results[0].y;
    w = results[0].width;
    h = results[0].height;
  });
}

function setup() {
  createCanvas(600, 400);
  video = createCapture(VIDEO);
  video.hide();
  objectDetector = ml5.objectDetector("cocossd", {}, modelLoaded);
}

function draw() {
  image(video, 0, 0, width, height);
  noFill();
  stroke(0);
  strokeWeight(3);
  rect(x, y, 50, 50);
  objectDetector.detect(video, (err, results) => {
    console.log(results);
    x = results[0].x;
    y = results[0].y;
    w = results[0].width;
    h = results[0].height;
  });
}
