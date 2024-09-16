// JavaScript for Slider Animation
let currentSlide = 0;
const slides = document.querySelectorAll('.slider .slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// JavaScript for Scroll Animations
document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll('.fade-element');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    fadeElements.forEach(el => observer.observe(el));
});

// JavaScript for Form Validation

// Login Form Validation
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value.trim();
        const errorMessage = document.getElementById('login-error');
        const successMessage = document.getElementById('login-success');

        // Reset messages
        errorMessage.style.display = 'none';
        successMessage.style.display = 'none';

        // Basic email and password validation
        if (!validateEmail(email)) {
            errorMessage.textContent = 'Please enter a valid email address.';
            errorMessage.style.display = 'block';
            return;
        }
        
        if (password.length < 6) {
            errorMessage.textContent = 'Password must be at least 6 characters long.';
            errorMessage.style.display = 'block';
            return;
        }

        // Simulate successful login
        successMessage.textContent = 'Login successful!';
        successMessage.style.display = 'block';
        loginForm.reset();
    });
}

// Register Form Validation
const registerForm = document.getElementById('register-form');
if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('register-name').value.trim();
        const email = document.getElementById('register-email').value.trim();
        const password = document.getElementById('register-password').value.trim();
        const confirmPassword = document.getElementById('register-confirm-password').value.trim();
        const errorMessage = document.getElementById('register-error');
        const successMessage = document.getElementById('register-success');

        // Reset messages
        errorMessage.style.display = 'none';
        successMessage.style.display = 'none';

        // Basic validations
        if (name === "") {
            errorMessage.textContent = 'Please enter your name.';
            errorMessage.style.display = 'block';
            return;
        }

        if (!validateEmail(email)) {
            errorMessage.textContent = 'Please enter a valid email address.';
            errorMessage.style.display = 'block';
            return;
        }

        if (password.length < 6) {
            errorMessage.textContent = 'Password must be at least 6 characters long.';
            errorMessage.style.display = 'block';
            return;
        }

        if (password !== confirmPassword) {
            errorMessage.textContent = 'Passwords do not match.';
            errorMessage.style.display = 'block';
            return;
        }

        // Simulate successful registration
        successMessage.textContent = 'Registration successful! You can now log in.';
        successMessage.style.display = 'block';
        registerForm.reset();
    });
}

// Contact Form Validation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('contact-email').value.trim();
        const message = document.getElementById('contact-message').value.trim();
        const errorMessage = document.getElementById('contact-error');
        const successMessage = document.getElementById('contact-success');

        // Reset messages
        errorMessage.style.display = 'none';
        successMessage.style.display = 'none';

        // Basic validations
        if (!validateEmail(email)) {
            errorMessage.textContent = 'Please enter a valid email address.';
            errorMessage.style.display = 'block';
            return;
        }

        if (message.length < 10) {
            errorMessage.textContent = 'Message must be at least 10 characters long.';
            errorMessage.style.display = 'block';
            return;
        }

        // Simulate successful message sending
        successMessage.textContent = 'Your message has been sent successfully!';
        successMessage.style.display = 'block';
        contactForm.reset();
    });
}

// Helper function to validate email using regex
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}


// Function to show the success pop-up
function showPopup() {
    document.getElementById('success-popup').classList.remove('hidden');
}

// Function to close the success pop-up
function closePopup() {
    document.getElementById('success-popup').classList.add('hidden');
}

// Example function to handle form submission
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Perform your registration logic here

    // Show the success pop-up on successful registration
    showPopup();
});
