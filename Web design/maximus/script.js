let i = 0;
const txt = 'This JS was a TOTAL waste of time, but you can click here to get to index'; // The text to type
const speed = 50; // Typing speed in milliseconds

function typeWriter() {
  const link = document.getElementById("typewriter");
  if (i < txt.length) {
    link.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;
