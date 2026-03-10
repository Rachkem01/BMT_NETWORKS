const root = document.documentElement;
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
const yearEl = document.getElementById('year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

function closeNav() {
  document.body.classList.remove('nav-open');
  toggle.setAttribute('aria-expanded', 'false');
}

function openNav() {
  document.body.classList.add('nav-open');
  toggle.setAttribute('aria-expanded', 'true');
}

function toggleNav() {
  if (document.body.classList.contains('nav-open')) {
    closeNav();
  } else {
    openNav();
  }
}

if (toggle && nav) {
  toggle.addEventListener('click', toggleNav);

  nav.addEventListener('click', (event) => {
    if (event.target.matches('a')) {
      closeNav();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeNav();
    }
  });
}
