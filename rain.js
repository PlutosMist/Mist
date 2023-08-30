const rainContainer = document.getElementById('rain-container');
const numRaindrops = 50; 

for (let i = 0; i < numRaindrops; i++) {
  const raindrop = document.createElement('img');
  raindrop.classList.add('raindrop');
  raindrop.src = '1.gif';
  raindrop.style.left = `${Math.random() * 100}%`;
  raindrop.style.animationDuration = `${Math.random() * 3 + 1}s`;
  rainContainer.appendChild(raindrop);
}
