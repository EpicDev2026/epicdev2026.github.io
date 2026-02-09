// LaravelDev Portfolio - Main JavaScript

// Mobile navigation toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileToggle && navMenu) {
  mobileToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    mobileToggle.classList.toggle('active');
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navbar = document.querySelector('#navbar');
      const navHeight = navbar ? navbar.offsetHeight : 0;
      const targetPos = target.offsetTop - navHeight;
      
      window.scrollTo({
        top: targetPos,
        behavior: 'smooth'
      });

      // Close mobile menu after navigation
      if (navMenu) {
        navMenu.classList.remove('active');
      }
      if (mobileToggle) {
        mobileToggle.classList.remove('active');
      }
    }
  });
});

// Navbar background on scroll
const navbar = document.querySelector('#navbar');

window.addEventListener('scroll', function() {
  const currentScroll = window.pageYOffset;
  
  if (navbar) {
    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe service cards and other animated elements
const animatedElements = document.querySelectorAll('.service-card, .approach-card, .tech-category, .contact-card');
animatedElements.forEach(function(el) {
  observer.observe(el);
});
