// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Fade-in effect for sections as you scroll
  document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {threshold: 0.1});
    
    document.querySelectorAll('.grid-item').forEach(item => {
      observer.observe(item);
    });
  });
  
  // Header transparency control based on scroll position
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    } else {
      header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    }
  });