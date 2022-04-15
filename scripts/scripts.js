const inputLink = document.querySelector('.input-text');
const imageLink = document.querySelector('.image');

inputLink.addEventListener('input', (event) => {
  imageLink.setAttribute("viewBox", `0 0 ${event.target.value} 1170`); 
});