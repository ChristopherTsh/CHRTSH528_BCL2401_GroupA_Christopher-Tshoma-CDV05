const hamburgerButton = document.querySelector('.block.lg\\:hidden button');
const navbar = document.querySelector('#navbar');

hamburgerButton.addEventListener('click', () => {
  navbar.classList.toggle('hidden');
});