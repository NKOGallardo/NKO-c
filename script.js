/* ===========================
   NKO CODING — script.js
   =========================== */

/* --- CUSTOM CURSOR --- */
const cursor = document.getElementById('cursor');
const trail = document.getElementById('cursorTrail');
let mx = 0, my = 0, tx = 0, ty = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
});

function animateTrail() {
  tx += (mx - tx) * 0.12;
  ty += (my - ty) * 0.12;
  trail.style.left = tx + 'px';
  trail.style.top = ty + 'px';
  requestAnimationFrame(animateTrail);
}
animateTrail();

// Hide cursor on touch devices
if ('ontouchstart' in window) {
  cursor.style.display = 'none';
  trail.style.display = 'none';
  document.body.style.cursor = 'auto';
}

/* --- NAV SCROLL EFFECT --- */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

/* --- MOBILE MENU --- */
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

/* --- REVEAL ON SCROLL --- */
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Stagger children
      const siblings = entry.target.parentElement?.querySelectorAll('.reveal:not(.visible)');
      if (siblings) {
        let delay = 0;
        siblings.forEach(s => {
          if (s === entry.target) return;
          if (!s.classList.contains('visible')) {
            s.style.transitionDelay = delay + 's';
            delay += 0.08;
          }
        });
      }
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(el => revealObserver.observe(el));

/* --- COUNT UP ANIMATION --- */
function countUp(el) {
  const target = parseInt(el.dataset.count, 10);
  const duration = 1800;
  const start = performance.now();
  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

const statNums = document.querySelectorAll('.stat__num');
const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      countUp(entry.target);
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.8 });

statNums.forEach(el => statsObserver.observe(el));

/* --- TESTIMONIALS DUPLICATION (infinite scroll) --- */
const track = document.getElementById('testiTrack');
if (track) {
  const clone = track.innerHTML;
  track.innerHTML += clone; // duplicate for seamless loop
}

/* --- CONTACT FORM --- */
const form = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

form?.addEventListener('submit', async (e) => {
  e.preventDefault();

  const btn = form.querySelector('button[type="submit"]');
  const btnText = btn.querySelector('.btn-text');
  const inputs = form.querySelectorAll('input, textarea, select');

  // Validate
  let valid = true;
  inputs.forEach(input => {
    input.style.borderColor = '';
    if (input.hasAttribute('required') && !input.value.trim()) {
      input.style.borderColor = '#f87171';
      valid = false;
    }
    if (input.type === 'email' && input.value && !input.value.includes('@')) {
      input.style.borderColor = '#f87171';
      valid = false;
    }
  });

  if (!valid) {
    shakeForm(form);
    return;
  }

  // Simulate submission
  btn.disabled = true;
  btnText.textContent = 'Sending...';
  btn.style.opacity = '0.7';

  await new Promise(r => setTimeout(r, 1500));

  form.style.transition = 'opacity 0.4s';
  form.querySelectorAll('.form-group, .form-row, button[type="submit"]').forEach(el => {
    el.style.display = 'none';
  });
  formSuccess.classList.add('show');

  btn.disabled = false;
  btnText.textContent = 'Send Message';
  btn.style.opacity = '';
});

function shakeForm(el) {
  el.style.animation = 'none';
  el.offsetHeight; // reflow
  el.style.animation = 'shake 0.4s ease';
}

// Add shake keyframes dynamically
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-6px); }
  40% { transform: translateX(6px); }
  60% { transform: translateX(-4px); }
  80% { transform: translateX(4px); }
}`;
document.head.appendChild(shakeStyle);

/* --- ACTIVE NAV LINK ON SCROLL --- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__links a, .nav__mobile a');

const activeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.style.color = 'var(--white)';
        }
      });
    }
  });
}, { threshold: 0.5 });

sections.forEach(s => activeObserver.observe(s));

/* --- SMOOTH ANCHOR SCROLL (offset for fixed nav) --- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const offset = nav.offsetHeight + 20;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* --- TILT EFFECT ON CARDS --- */
function addTilt(selector, intensity = 8) {
  document.querySelectorAll(selector).forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      card.style.transform = `perspective(800px) rotateY(${dx * intensity}deg) rotateX(${-dy * intensity}deg) translateZ(4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.5s ease';
      setTimeout(() => card.style.transition = '', 500);
    });
  });
}
addTilt('.service-card', 5);
addTilt('.pricing-card', 4);

/* --- DYNAMIC YEAR IN FOOTER --- */
const yearEl = document.querySelector('.footer__bottom p');
if (yearEl) {
  yearEl.textContent = yearEl.textContent.replace('2025', new Date().getFullYear());
}

/* --- INPUT LABEL FLOAT EFFECT --- */
document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
  input.addEventListener('focus', () => {
    input.closest('.form-group')?.classList.add('focused');
  });
  input.addEventListener('blur', () => {
    input.closest('.form-group')?.classList.remove('focused');
  });
});

/* --- PAGE LOAD ANIMATION --- */
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  setTimeout(() => { document.body.style.opacity = '1'; }, 50);

  // Trigger hero reveals immediately
  document.querySelectorAll('.hero .reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 100 + i * 120);
  });
});