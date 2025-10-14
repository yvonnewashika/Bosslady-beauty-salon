// Global variables
let currentSection = 'index';
let isMobileMenuOpen = false;

// DOM elements
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');
const navLinksMobile = document.querySelectorAll('.nav-link-mobile');
const mobileNav = document.getElementById('mobileNav');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Show home section by default
    showSection('home');
    
    // Add event listeners
    addEventListeners();
});

// Add event listeners
function addEventListeners() {
    // Form submission
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    // Button clicks
    const bookButtons = document.querySelectorAll('.btn');
    bookButtons.forEach(button => {
        if (button.textContent.includes('Book') || button.textContent.includes('Schedule')) {
            button.addEventListener('click', handleBookingClick);
        }
    });
}

// Show specific section
function showSection(sectionId) {
    // Hide all sections
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Update navigation active states
    updateNavigation(sectionId);

    // Close mobile menu if open
    if (isMobileMenuOpen) {
        toggleMobileMenu();
    }

    // Update current section
    currentSection = sectionId;

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Add fade-in animation
    if (targetSection) {
        targetSection.style.animation = 'fadeIn 0.5s ease';
    }
}

// Update navigation active states
function updateNavigation(activeSection) {
    // Update desktop navigation
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.section === activeSection) {
            link.classList.add('active');
        }
    });

    // Update mobile navigation
    navLinksMobile.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.section === activeSection) {
            link.classList.add('active');
        }
    });
}

// Toggle mobile menu
function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
    
    if (isMobileMenuOpen) {
        mobileNav.classList.add('show');
        mobileNav.style.display = 'flex';
    } else {
        mobileNav.classList.remove('show');
        mobileNav.style.display = 'none';
    }

    // Animate hamburger menu
    const hamburgers = document.querySelectorAll('.hamburger');
    hamburgers.forEach((hamburger, index) => {
        if (isMobileMenuOpen) {
            if (index === 0) {
                hamburger.style.transform = 'rotate(45deg) translate(5px, 5px)';
            } else if (index === 1) {
                hamburger.style.opacity = '0';
            } else if (index === 2) {
                hamburger.style.transform = 'rotate(-45deg) translate(7px, -6px)';
            }
        } else {
            hamburger.style.transform = 'none';
            hamburger.style.opacity = '1';
        }
    });
}

// Handle form submission
// Handle form submission (send to WhatsApp)

function handleFormSubmit(event) {
    event.preventDefault();

    // Collect form values directly
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const service = event.target.service.value;
    const message = event.target.message.value;

    // Your WhatsApp number
    const phoneNumber = "254701872212"; 

    // Build WhatsApp message
    const text = `Hello, my name is ${firstName} ${lastName}.
Email: ${email}
Phone: ${phone}
Service: ${service}
Message: ${message}`;

    // Open WhatsApp
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");

    // Reset form
    event.target.reset();

    console.log("Form submitted to WhatsApp:", text);
}



// Handle booking button clicks
function handleBookingClick(event) {
    event.preventDefault();
    
    // Simulate booking action
    alert('Booking feature coming soon! Please call us at 0799545159 to schedule your appointment.');
    
    console.log('Booking button clicked');
}

// Handle window resize
window.addEventListener('resize', function() {
    // Close mobile menu on desktop
    if (window.innerWidth > 768 && isMobileMenuOpen) {
        toggleMobileMenu();
    }
});

// Handle scroll for header background
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = '#000';
        header.style.backdropFilter = 'none';
    }
});

// Smooth scrolling for better UX
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Add hover effects to service cards
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    const testimonials = document.querySelectorAll('.testimonial');
    const features = document.querySelectorAll('.feature');
    
    // Add hover effects
    [serviceCards, testimonials, features].forEach(elements => {
        elements.forEach(element => {
            element.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
                this.style.boxShadow = '0 10px 25px rgba(245, 158, 11, 0.2)';
            });
            
            element.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = 'none';
            });
        });
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.service-card, .testimonial, .feature, .contact-item');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounced resize handler
const debouncedResize = debounce(function() {
    // Handle any resize-specific logic here
    console.log('Window resized');
}, 250);

window.addEventListener('resize', debouncedResize);

// Export functions for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showSection,
        toggleMobileMenu,
        handleFormSubmit,
        handleBookingClick
    };
}