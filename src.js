const canvas = document.querySelector('canvas');
canvas.width = 400;
canvas.height = 200;
const c = canvas.getContext('2d');

let i = 0;

const guide = () => {
  c.lineWidth = 0.2;
  c.strokeStyle = 'rgba(0, 0, 0, 1)';
  c.beginPath();
  c.moveTo(0, canvas.height / 2);
  c.lineTo(canvas.width, canvas.height / 2);
  c.stroke();
};

const sineWave = (
  offset,
  height = 0.33 * canvas.height,
  waveOffset = 0,
  strength = 1,
  color = 'rgba(0, 0, 255, 1)') => {
  c.strokeStyle = color;
  c.lineWidth = 3;
  c.beginPath();
  for (let x = 40; x <= canvas.width - 40; x += 1) {
    const y = (canvas.height / 2) -
    (Math.sin((Math.PI * (x + i + waveOffset)) / (canvas.width * strength / 2)) * height);
    c.lineTo(x, y);
  }
  c.stroke();
};
const draw = () => {
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
