/* Top text/typewriter */
const text = "Hello User...";
const target = document.getElementById("typewriter");
let index = 0;
const speed = 100; // typewrite speed 

function typeWriter() {
  if (index < text.length) {
    target.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  } 
}

window.onload = typeWriter;
