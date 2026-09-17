// AE9 Labs — Local Service Provider Template
// You shouldn't need to touch this file. It just handles small
// niceties: the footer year, and the mobile menu button.

document.getElementById('year').textContent = new Date().getFullYear();

// Simple mobile nav toggle
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const isOpen = navLinks.style.display === 'flex';
    navLinks.style.display = isOpen ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '64px';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = '#fff';
    navLinks.style.padding = '16px 24px';
    navLinks.style.boxShadow = '0 8px 16px rgba(0,0,0,0.08)';
  });
}
