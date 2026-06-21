const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Active link highlighting (based on scroll)
const navLinks = [...document.querySelectorAll('.nav-link')];
const sections = navLinks
  .map(a => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);

const setActive = (id) => {
  for (const a of navLinks) {
    const href = a.getAttribute('href');
    a.classList.toggle('active', href === `#${id}`);
  }
};

if (sections.length) {
  const obs = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a,b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];
      if (visible?.target?.id) setActive(visible.target.id);
    },
    { root: null, threshold: [0.2, 0.35, 0.5], rootMargin: '-10% 0px -70% 0px' }
  );
  for (const s of sections) obs.observe(s);
}

// Animated counters
function animateCount(el, to) {
  const duration = 900;
  const start = performance.now();
  const from = 0;

  function frame(t) {
    const p = Math.min(1, (t - start) / duration);
    const eased = 1 - Math.pow(1 - p, 3);
    const val = Math.round(from + (to - from) * eased);
    el.textContent = String(val);
    if (p < 1) requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}

const counters = [...document.querySelectorAll('[data-count]')];
if (counters.length) {
  const counterObs = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          const el = e.target;
          const to = Number(el.getAttribute('data-count'));
          animateCount(el, Number.isFinite(to) ? to : 0);
          counterObs.unobserve(el);
        }
      }
    },
    { threshold: 0.35 }
  );
  counters.forEach(c => counterObs.observe(c));
}

// Project filter
const filterButtons = [...document.querySelectorAll('.filter-btn')];
const projectCards = [...document.querySelectorAll('.project')];

function applyFilter(tag) {
  for (const card of projectCards) {
    const tags = (card.getAttribute('data-tags') || '').split(/\s+/).filter(Boolean);
    const match = tag === 'all' || tags.includes(tag);
    card.classList.toggle('is-hidden', !match);
  }
}

for (const btn of filterButtons) {
  btn.addEventListener('click', () => {
    for (const b of filterButtons) b.classList.remove('is-active');
    btn.classList.add('is-active');
    applyFilter(btn.getAttribute('data-filter') || 'all');
  });
}

// Contact form (front-end only)
const contactForm = document.getElementById('contact-form');
const note = document.getElementById('form-note');

if (contactForm && note) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const name = String(formData.get('name') || '').trim();
    note.style.color = 'var(--muted)';

    if (!name) {
      note.textContent = 'Please enter your name.';
      return;
    }

    note.textContent = `Thanks, ${name}! This is a static demo—no message was actually sent.`;
    contactForm.reset();
  });
}

