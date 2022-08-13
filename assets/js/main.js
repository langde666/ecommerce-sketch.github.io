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

// DARK LIGHT THEME
const themeBtn = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'fa-sun';

// Handle previously selected theme
const selectedTheme = localStorage.getItem('selectedTheme');
const selectedIcon = localStorage.getItem('selectedIcon');

if (selectedTheme) {
    if (selectedTheme === 'dark') {
        document.body.classList.add(darkTheme);
        themeBtn.classList.add(iconTheme);
    }
    else {
        document.body.classList.remove(darkTheme);
        themeBtn.classList.remove(iconTheme);
    }
}

// Theme Button
themeBtn.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains(darkTheme) ? 'light' : 'dark';
    const currentIcon = themeBtn.classList.contains(iconTheme) ? 'fa-sun' : 'fa-moon';

    document.body.classList.toggle(darkTheme);
    themeBtn.classList.toggle(iconTheme);

    // Save to localStorage
    localStorage.setItem('selectedTheme', currentTheme);
    localStorage.setItem('selectedIcon', currentIcon);
});