//MOBILE MENU DISPLAY
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

//TESTIMONIALS SLIDER

const slider = document.querySelector('.slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
});
slider.addEventListener('mouseup', () => {
  isDown = false;
});
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});

//TESTIMONIALS MOBILE SLIDER

const test1 = document.querySelector('.testimonial1');
const test2 = document.querySelector('.testimonial2');
const test3 = document.querySelector('.testimonial3');
const test4 = document.querySelector('.testimonial4');
const dot1 = document.querySelector('.dot1');
const dot2 = document.querySelector('.dot2');
const dot3 = document.querySelector('.dot3');
const dot4 = document.querySelector('.dot4');

const dotArr = [dot1, dot2, dot3, dot4];
const testArr = [test1, test2, test3, test4];

const handleDotClick = (dot) => {
  //logic for dots
  const selected = dot.target;
  selected.style.backgroundColor = 'hsl(12, 84%, 63%)';
  const hide = dotArr.filter((dot) => dot !== selected);
  hide.forEach((dot) => (dot.style.backgroundColor = 'white'));
  const selectedIndex = dotArr.indexOf(selected);

  //logic for displayin testimonials
  const selectedTest = testArr[selectedIndex];
  selectedTest.classList.add('showTest');
  const hidden = testArr.filter((test) => test !== selectedTest);
  hidden.forEach((test) => test.classList.contains('showTest') ? test.classList.remove('showTest') : '' );
  console.log(selectedTest);
};

dotArr.forEach((dot) => dot.addEventListener('click', handleDotClick));
