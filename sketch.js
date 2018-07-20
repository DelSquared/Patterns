var w = 500;
var h = 500;
var m=20;
var c = [0,0];
var z = iter([0,0]);
var s;

function setup() {
  createCanvas(w, h);
  pixelDensity(1);
  background(0);
  scl = createSlider(1,10000000,100);
  scl.position(20, h+80);
  s=scl.value();

}

function draw() {
  loadPixels();
  for (var i = 0; i < w; i++) {
    for (var j = 0; j < h; j++) {
      c = [10*(i/w -w/2),10*(j/h -h/2)];
      z = iter([0,0]);
      for (var k = 0; k < 50; k++) {
        z = iter(z);
        if (z[0]*z[0] + z[1]*z[1] >= 16.0) {
          break;  // Bail
        }
      }
      idx = 4*(i + w*j);
      s=scl.value();
      var v = ((z[0]*z[0] + z[1]*z[1])/s)%256;
      pixels[idx] = v;
      pixels[idx+1] = v;
      pixels[idx+2] = v;
      pixels[idx+3] = 255;
    }
  }
  updatePixels();
}

function iter(z){
  return [z[0]*z[0]-z[1]*z[1]+c[0], 2*z[0]*z[1]+c[1]];
}
