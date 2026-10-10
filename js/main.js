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

/* THIS IS OUR CONTACT FORM VALIDATION SECTION*/ 
const contactForm = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

function showError(input, message) {
    const errorSpan = input.parentElement.querySelector('.error-message');
    errorSpan.textContent = message;
    input.classList.add('invalid');
}

function clearError(input) {
    const errorSpan = input.parentElement.querySelector('.error-message');
    errorSpan.textContent = '';
    input.classList.remove('invalid');
}

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let isValid = true;

    clearError(nameInput);
    clearError(emailInput);
    clearError(messageInput);
document.querySelector('#form-success').textContent = '';
    if (nameInput.value.trim() === '') {
        showError(nameInput, 'Please enter your name.');
        isValid = false;
    }

    if (emailInput.value.trim() === '') {
        showError(emailInput, 'Please enter your email.');
        isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(emailInput.value.trim())) {
        showError(emailInput, 'Please enter a valid email address.');
        isValid = false;
    }

    if (messageInput.value.trim().length < 10) {
        showError(messageInput, 'Please write at least 10 characters.');
        isValid = false;
    }

    if (isValid) {
        const successMsg =document.querySelector('#form-success');
        successMsg.textContent = 'Thanks! Your message has been sent.';
        contactForm.reset();
    }
});

const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.portfolio-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        cards.forEach(card =>  {
            const matches = filter === 'all' || card.dataset.category === filter;
            card.classList.toggle('hidden', !matches);
        });
    })
});


// DARK MODE

const themeToggle = document.querySelector('.theme-toggle');
const root = document.documentElement;

function setTheme(theme) {
    if (theme === 'dark') {
        root.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
    }else {
        root.removeAttribute('data-theme');
        themeToggle.textContent =  '🌙';
    }
    localStorage.setItem('theme', theme);
}

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
setTheme(localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light'));

themeToggle.addEventListener('click',() => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    setTheme(isDark ? 'light' : 'dark');
});

document.querySelector('#year').textContent = new Date().getFullYear();