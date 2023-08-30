const circle = document.getElementById('circle');

let circleX = 0;
let circleY = 0;
const speed = 0.2; 

function updateCirclePosition(x, y) {
  circleX += (x - circleX) * speed;
  circleY += (y - circleY) * speed;
  circle.style.left = circleX + 'px';
  circle.style.top = circleY + 'px';
}

document.addEventListener('mousemove', (event) => {
  updateCirclePosition(event.clientX - 100, event.clientY - 100);
});

updateCirclePosition(0, 0);
