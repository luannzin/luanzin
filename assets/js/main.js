const amv = document.querySelector('.amv');
const flyer = document.querySelector('.flyer');

var lastScrollTop = 0;

window.addEventListener(
  'scroll',
  () => {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      if (location.hash == '#flyer' || location.hash == '') {
        location.hash = '#amv';
        behavior: 'smooth';
      }
    } else {
      if (location.hash == '#amv') {
        location.hash = '#flyer';
        behavior: 'smooth';
      }
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  },
  false,
);
