
document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const contactLink = document.getElementById('contact-link');
  const contactModal = document.getElementById('contact-modal');
  const closeModal = document.getElementById('close-modal');

  mobileMenuToggle.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
  });

  contactLink.addEventListener('click', function () {
      contactModal.classList.remove('hidden');
  });

  closeModal.addEventListener('click', function () {
      contactModal.classList.add('hidden');
  });
});