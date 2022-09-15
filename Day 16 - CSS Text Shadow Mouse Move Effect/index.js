let mousePosX = 0;
let mousePosY = 0;
let h1 = document.querySelector('h1')
let rect = h1.getBoundingClientRect();

window.addEventListener("mousemove", (e) => {
  mousePosX = e.clientX;
  mousePosY = e.clientY;
  multiplier = 0.2
  relativeX = rect.left - mousePosX + ((rect.right - rect.left)/2)
  relativeY = rect.top - mousePosY + ((rect.bottom - rect.top)/2)
  console.log(mousePosY)
  h1.style.textShadow = `${relativeX * multiplier}px ${relativeY * multiplier}px rgba(255,0,255,0.7), ${-relativeX * multiplier}px ${-relativeY * multiplier}px rgba(0,255,255,0.7), ${-relativeY * multiplier}px ${relativeX * multiplier}px rgba(0,255,0,0.7), ${relativeY * multiplier}px ${-relativeX * multiplier}px rgba(0,0,255,0.7)`

});



