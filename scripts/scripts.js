const inputLink = document.querySelector('.input-text');
const imageLink = document.querySelector('.image');

inputLink.addEventListener('input', (event) => {
  imageLink.style.height = `${event.target.value}px`
});