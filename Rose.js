// toggle hidden
let menuToggle = document.querySelector('.menu__toggle');
let body = document.querySelector('body');

menuToggle.addEventListener('click', () => {
    body.classList.toggle('open');
});

// header show
let lastScrollTop = 0;
header = document.querySelector('header');
window.addEventListener('scroll', () => {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop) {
        header.style.top = '-100%';
    } else {
        header.style.top = '0';
    }
    lastScrollTop = scrollTop;

    if(pageYOffset > 0){
        header.style.backgroundColor = 'rgba(200,200,200, 0.5)';
    } else {
        header.style.backgroundColor = 'white';
    }
});