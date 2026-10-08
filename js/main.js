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
