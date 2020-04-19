// set the starting position of the cursor outside of the screen
/* 
let clientX = -100;
let clientY = -100;
const innerCursor = document.querySelector(".cursor--small");

const initCursor = () => {
  // add listener to track the current mouse position
  document.addEventListener("mousemove", e => {
    clientX = e.clientX;
    clientY = e.clientY;
  });
  
  // transform the innerCursor to the current mouse position
  // use requestAnimationFrame() for smooth performance
  const render = () => {
    innerCursor.style.transform = `translate(${clientX-55}px, ${clientY-28}px)`;
    // if you are already using TweenMax in your project, you might as well
    // use TweenMax.set() instead
    // TweenMax.set(innerCursor, {
    //   x: clientX,
    //   y: clientY
    // });
    
    requestAnimationFrame(render);
  };
  requestAnimationFrame(render);
};

initCursor();

*/

document.querySelector(".gn-menu").onclick = function() {
  document.querySelector(".gn-menu-list-container").classList.toggle('opened');
  document.querySelectorAll(".gn-menu-stick")[0].classList.toggle('active');
  document.querySelectorAll(".gn-menu-stick")[1].classList.toggle('active');
}