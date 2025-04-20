////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const   navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');
/* menu show */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}
/* menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    });
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* remove mobile class */
const navLink = document.querySelectorAll('.nav__link');

const linkAct = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAct));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* change bg */
const shadowHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header');
}
window.addEventListener('scroll', shadowHeader);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* swiper js */
const swiperHome = new Swiper('.popular__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* scroll up */
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 400 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* scroll section active */
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
              
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link');
        }else{
            sectionsClass.classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* scroll reveal */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    // reset: true,
});

sr.reveal(`.home__data, .popular__container, .footer`);
sr.reveal(`.home__board`, {delay: 700, distance: '100px', origin: 'right'});
sr.reveal(`.home__pizza`, {delay: 1400, distance: '100px', origin: 'bottom', rotate: {z: -90}});
sr.reveal(`.home__ingredient`, {delay: 2000, interval: 100});
sr.reveal(`.about__data, .recipe__list, .contact__data`, {origin: 'right'});
sr.reveal(`.about__img, .recipe__img, .contact__image`, {origin: 'left'});
sr.reveal(`.products__card`, {interval: 100});