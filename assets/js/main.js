// MENU
const showMenuBtn = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
showMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
    showMenuBtn.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(navLink => {
    navLink.addEventListener('click', function(){
        const activeLink = document.querySelector('.nav__link.active');
        activeLink.classList.remove('active');
        this.classList.add('active');

        navMenu.classList.remove('show-menu');
        showMenuBtn.classList.toggle('active');
    });
});

// SCROLL ACTIVE LINK
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
        }
        else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
        }
    })
});

// CHANGE BACKGROUND  HEADER
window.addEventListener('scroll', function(){
    const nav = document.getElementById('header');

    if (this.scrollY >= 80) {
        nav.classList.add('scroll-header');
    }
    else {
        nav.classList.remove('scroll-header')
    }
});

// SHOW SCROLL UP
window.addEventListener('scroll', function(){
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >=560) {
        scrollUp.classList.add('show-scroll');
    }
    else {
        scrollUp.classList.remove('show-scroll');
    }
});