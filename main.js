// Store CDN links and streams in a single object
const constURL = {
  style: "https://cdn.jsdelivr.net/gh/KrnlScriptMakerTryer/animated-engine@main/style.css",
  script: "https://cdn.jsdelivr.net/gh/KrnlScriptMakerTryer/animated-engine@main/main.js",
  stream: "https://edge.mix1023.com.au/Mix1023.aac"
};

// Dynamically load CSS
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = constURL.style;
document.head.appendChild(link);

// Radio player logic
const button = document.getElementById('playRadio');
const radio = document.createElement('audio');
radio.id = 'radioStream';
radio.preload = 'none';
radio.src = constURL.stream;
document.body.appendChild(radio);

let isPlaying = false;

button.addEventListener('click', () => {
  if (!isPlaying) {
    radio.play();
    button.textContent = 'Pause Mix 102.3';
    isPlaying = true;
  } else {
    radio.pause();
    button.textContent = 'Play Mix 102.3';
    isPlaying = false;
  }
});
