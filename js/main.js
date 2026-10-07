const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const menuLinks = document.querySelectorAll('.nav-links a');

menuBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    menuBtn.setAttribute('aria-expanded', isOpen);
    menuBtn.textContent = isOpen ? 'X' : '☰';
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.textContent =  '☰' ;
    });
});