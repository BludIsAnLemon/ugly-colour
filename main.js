function randomColour() {
  const hexASCII = "ABCDEF1234567890";
  let resultColor = "#";
  for(let i = 0; i < 6; i++) {
    resultColor += hexASCII.charAt(Math.floor(Math.random() * hexASCII.length));
  };
  return resultColor;
}

function copyText(text) {
  navigator.clipboard.writeText(text);
}

const button = document.getElementById('genBtn');

button.addEventListener('click', function() {
  const colorElements = ["color1","color2","color3","color4","color5"];
  colorElements.forEach((currentValue) => {
    const element = document.getElementById(currentValue);
    const colour = randomColour();
    element.style.backgroundColor = colour;
    element.textContent = colour;
  })
})