const API_KEY = import.meta.env.VITE_CAT_API_KEY;

const output = document.getElementById('output');
const breedsBtn = document.getElementById('breeds-btn');
const randomBtn = document.getElementById('random-btn');

// When "Show Cat Breeds" is clicked
breedsBtn.addEventListener('click', async () => {
  output.innerHTML = 'Loading cat breeds...';
  const res = await fetch('https://api.thecatapi.com/v1/breeds', {
    headers: { 'x-api-key': API_KEY }
  });
  const data = await res.json();
  output.innerHTML = '';
  data.slice(0, 10).forEach(breed => {
    const info = document.createElement('div');
    info.innerHTML = `<h3>${breed.name}</h3><p>${breed.description}</p>`;
    output.appendChild(info);
  });
});

// When "Show Random Cats" is clicked
randomBtn.addEventListener('click', async () => {
  output.innerHTML = 'Loading cats...';
  const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=6', {
    headers: { 'x-api-key': API_KEY }
  });
  const data = await res.json();
  output.innerHTML = '';
  data.forEach(cat => {
    const img = document.createElement('img');
    img.src = cat.url;
    output.appendChild(img);
  });
});
