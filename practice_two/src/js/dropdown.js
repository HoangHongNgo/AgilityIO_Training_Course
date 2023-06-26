const icon = document.querySelector('.navbar__icon');
const menu = document.querySelector('.navbar__menu');

icon.addEventListener('click', function() {
  menu.classList.toggle('active');
  icon.classList.toggle('active');
});