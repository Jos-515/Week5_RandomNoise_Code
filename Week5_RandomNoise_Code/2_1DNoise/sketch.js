/* DN3008 Generative Art, Ashley Hi 2026
 * Week 5 - Randomness & Noise
 * 1D Noise
 *** Try making a swarm of these particles, each with different paths.
 */

// *** try changing these values and see the outcomes
var nScale = 0.01;
var octaves = 8;
var falloff = 0.5;
var y_offset = 1000;

function setup() {
  createCanvas(512, 512);
  stroke(255);
}

function draw() {
  background(0);

  noiseDetail(octaves, falloff);
  var x = noise(frameCount * nScale) * width;
  var y = noise(frameCount * nScale + y_offset) * height;
  ellipse(x, y, 5, 5);
}
