// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
  
    // Add parallax effect to hero section
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', function() {
      const scrollPosition = window.pageYOffset;
      hero.style.backgroundPosition = 'center ' + (scrollPosition * 0.4) + 'px';
    });
  
    // Animate feature items when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  
    document.querySelectorAll('.grid-item').forEach(item => {
      observer.observe(item);
      item.classList.add('fade-in');
    });
  
    // Add hover effects for feature icons
    document.querySelectorAll('.feature-icon').forEach(icon => {
      icon.addEventListener('mouseenter', function() {
        this.classList.add('pulse');
      });
      
      icon.addEventListener('mouseleave', function() {
        this.classList.remove('pulse');
      });
    });
  
    // Add animation to process steps
    document.querySelectorAll('.step').forEach((step, index) => {
      setTimeout(() => {
        step.classList.add('visible');
      }, 300 * index);
    });
  
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
      .fade-in {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
      }
      
      .animate {
        opacity: 1;
        transform: translateY(0);
      }
      
      .pulse {
        animation: pulse 1s infinite;
      }
      
      @keyframes pulse {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.1);
        }
        100% {
          transform: scale(1);
        }
      }
      
      .step {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
      }
      
      .step.visible {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);
  });