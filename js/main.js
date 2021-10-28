const hamburguerMenu = document.getElementById('hamburguer');
const mobileMenu = document.getElementById('mobileMenu');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
let showMenu = false;

const toggleMenu = () => {
  showMenu = !showMenu;
  if (showMenu) {
    hamburguerMenu.classList.add('open');
    mobileMenu.classList.add('show');
    overlay.classList.add('showOverlay');
  } else {
    hamburguerMenu.classList.remove('open');
    mobileMenu.classList.remove('show');
    overlay.classList.remove('showOverlay');
  }
};

hamburguerMenu.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);
