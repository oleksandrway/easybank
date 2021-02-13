console.log('test');

const hamburger = document.querySelector('.header__hamburger'),
header = document.querySelector('.header'),
overlay= document.querySelector('.overlay'),
menu = document.querySelector('.header__links'),
body = document.querySelector('body'),
html = document.querySelector('html');


hamburger.addEventListener('click', () => {
  
  if(header.classList.contains('open')) {
    html.classList.remove('noScroll');

    header.classList.remove('open');
    overlay.classList.add('fade-out');
    overlay.classList.remove('fade-in');
    menu.classList.add('fade-out');
    menu.classList.remove('fade-in');

  } else {
    html.classList.add('noScroll');
    header.classList.add('open');
    overlay.classList.remove('fade-out');
    overlay.classList.add('fade-in');
    menu.classList.remove('fade-out');
    menu.classList.add('fade-in');

  }
});