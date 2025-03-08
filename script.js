// Skrypt obsługujący menu hamburgera (rozwijane na urządzeniach mobilnych)
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
