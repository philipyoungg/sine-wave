'use strict';

var canvas = document.querySelector('canvas');
canvas.width = 400;
canvas.height = 200;
var c = canvas.getContext('2d');

var i = 0;

var guide = function guide() {
  c.lineWidth = 0.2;
  c.strokeStyle = 'rgba(0, 0, 0, 1)';
  c.beginPath();
  c.moveTo(0, canvas.height / 2);
  c.lineTo(canvas.width, canvas.height / 2);
  c.stroke();
};

var sineWave = function sineWave(offset) {
  var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.33 * canvas.height;
  var waveOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var strength = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'rgba(0, 0, 255, 1)';

  c.strokeStyle = color;
  c.lineWidth = 3;
  c.beginPath();
  for (var x = 40; x <= canvas.width - 40; x += 1) {
    var y = canvas.height / 2 - Math.sin(Math.PI * (x + i + waveOffset) / (canvas.width * strength / 2)) * height;
    c.lineTo(x, y);
  }
  c.stroke();
};
var draw = function draw() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  i += 1;
  if (i >= canvas.width) {
    i = 0;
  }
  guide(i);
  sineWave(i);
  sineWave(i, 0.1 * canvas.height, 70, 0.5, 'rgba(255, 0, 0, 0.6)');
  setTimeout(draw, 1);
};

draw();