   // Add event listeners to all "Get Started" buttons
   document.querySelectorAll('.get-started-btn').forEach(button => {
    button.addEventListener('click', () => {
      window.open('https://wa.me/+27659534786', '_blank');
    });
  });

// Toggle Menu
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
  menuToggle.classList.toggle('open');
});

// Section reveal animation
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){ entry.target.classList.add('visible'); }
  })
},{threshold:0.2});
sections.forEach(sec=>observer.observe(sec));

   // Animated counter for skill circles
   function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16); // 60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(start) + '%';
    }, 16);
  }

  // Intersection Observer for skill circles animation
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const circleText = entry.target.querySelector('.circle-text');
        const target = parseInt(circleText.dataset.target);
        
        // Animate the number
        animateCounter(circleText, target, 2000);
        
        // Animate the circle progress
        const circle = entry.target.querySelector('.circle');
        circle.style.background = `conic-gradient(from 0deg, #5a6a7a 0deg ${target * 3.6}deg, #e0e0e0 ${target * 3.6}deg)`;
        
        // Unobserve after animation
        skillObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });

  // Observe all skill circles
  document.querySelectorAll('.skill-circle').forEach(circle => {
    skillObserver.observe(circle);
  });