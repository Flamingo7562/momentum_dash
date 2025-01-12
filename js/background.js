function createArray(count) {
  return Array.from({ length: count }, (_, i) => `${i}.png`);
}

//const images = ["0.png", "1.png", "2.png", "3.png"];
const images = createArray(28);
const chosenImage = images[Math.floor(Math.random() * images.length)];

//document.body.appendChild(bgImage);
document.body.style.backgroundImage = `url(img/${chosenImage})`;
document.body.style.backgroundSize = "cover";
