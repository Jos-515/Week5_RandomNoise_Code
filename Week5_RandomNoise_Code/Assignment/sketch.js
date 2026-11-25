/* DN3008 Generative Art, Ashley Hi 2026
 * Week 5 - Randomness & Noise
 * Assignment - Jocelyn Eddy
 */

function setup() {
  createCanvas(512, 512);
  frameRate(20);
  noFill();
}

function draw() {
  background(245, 245, 245);


  stroke(0);
  strokeWeight(1);
  var standardDeviation = 400;
  for (var i = 0; i < 5000; i++) {
    var backDist = randomGaussian(0, standardDeviation);
    var b = createVector(backDist, random(-height, height));
    point(b.x, b.y);
  }
 
  drawRaindrop(350, 350, 25, 45);
  drawRaindrop(350, 150, 25, 45);
  drawRaindrop(450, 250, 25, 45);
  drawRaindrop(250, 250, 25, 45);
  drawRaindrop(250, 50, 25, 45);
  drawRaindrop(250, 450, 25, 45);
  drawRaindrop(50, 250, 25, 45);
  drawRaindrop(150, 350, 25, 45);
  drawRaindrop(150, 150, 25, 45);

  drawCircle(350, 250, 18);
  drawCircle(150, 250, 18);
  drawCircle(250, 150, 18);
  drawCircle(250, 350, 18);
}

function drawRaindrop(x, y, w, h) {
  push();

  stroke(99, 150, 255);
  strokeWeight(1.5);
  for (let i = 0; i < 800; i++) {
    const p = randomInTear(x, y, w, h, 2.5);
    point(p.x, p.y);
  }

  pop();
}

function randomInTear(x, y, w, h, bias = 2) {
  const r = w / 2;
  const top = y - h / 2;      
  const cy = y + h / 4;       
  const bottom = cy + r;      

  const t = 1 - pow(random(), bias);
  const py = lerp(top, bottom, t);

  let halfW;
  if (py < cy) {
    halfW = r * (py - top) / (cy - top);   
  } else {
    halfW = sqrt(r * r - sq(py - cy));    
  }

  return createVector(x + random(-halfW, halfW), py);
}

function drawCircle(x, y, r) {
  push();
  stroke(242, 202, 80);
  strokeWeight(1.5);
  for (let i = 0; i < 800; i++) {
    const p = randomInCircle(x, y, r, 2.5);
    point(p.x, p.y);
  }
  pop();
}

function randomInCircle(x, y, r, bias = 2) {
  const t = pow(random(), bias);
  const angle = random(TWO_PI);
  const radius = sqrt(t) * r;
  return createVector(x + radius * cos(angle), y + radius * sin(angle));
}
