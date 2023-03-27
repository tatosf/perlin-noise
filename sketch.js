
var inc = 0.1;
var scl = 10;
var cols, rows;

var zoff = 0;

var fr;

var particles = [];

var flowfield;

function setup() {
  createCanvas(600, 400);
  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP('');

  flowfield = new Array(cols * rows);

  for (var i = 0; i < 300; i++) {
    particles[i] = new Particle();
  }
  background(51);
}

function draw() {
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowfield[index] = v;
      xoff += inc;
      stroke(0, 50);
      // push();
      // translate(x * scl, y * scl);
      // rotate(v.heading());
      // strokeWeight(1);
      // line(0, 0, scl, 0);
      // pop();
    }
    yoff += inc;

    zoff += 0.0003;
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }

  // fr.html(floor(frameRate()));
}







// var inc = 0.1
// var scl = 10;
// var cols, rows;

// var zoff = 0;

// var fr;

// var particles = [];

// var flowfield;

// function setup() {
//   createCanvas(400,400);
//   pixelDensity(1)
//   cols = floor(width / scl);
//   rows = floor(height / scl);
//   fr = createP('');

//   flowfield = new Array(cols*rows);

//   for(var i = 0; i < 100; i++){
//     particles[i] = new Particle();
//   }
// }

// function draw() {
//   background(255);
//   var yoff = 0;
//   for (var y = 0; y < rows; y++) {
//     var xoff = 0;
//     for (var x = 0; x < cols; x++) {
//       var index = x + y * cols;
//       v.setMag(0.1); 
//       flowfield[index] = v;
//       var angle = noise(xoff, yoff, zoff) * TWO_PI;
//       var v = p5.Vector.fromAngle(angle);
//       xoff += inc;
//       stroke(0,50);
//       push();
//       translate(x * scl, y * scl);
//       rotate(v.heading());
//       strokeWeight(1);
//       line(0, 0 ,scl ,0);


//       pop();
//     } 
//     yoff += inc;

//     //zoff += 0.001;
//   } 
//   for(var i = 0; i < particles.length; i++){
//     particles[i].follow(flowfield);
//     particles[i].update();
//     particles[i].show();
//     particles[i].edges();
//   }
//   fr.html(floor(frameRate()));
// }
