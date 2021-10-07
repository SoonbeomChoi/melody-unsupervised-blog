export function draw1D(canvas, array, color) {
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();

  const step = Math.ceil(array.length/canvas.width);
  const amp = canvas.height/2;

  for (let i = 0; i < canvas.width; i++) {
    let min = 1.0;
    let max = -1.0;
    for (let j = 0; j < step; j++) {
      const value = array[(i*step) + j]
      if (value < min) { min = value }
      if (value > max) { max = value }
    }
    context.fillStyle = color;
    context.fillRect(i, (1 + min)*amp, 1, Math.max(1, (max - min)*amp));
  }
}