// 1. Navbar Scrolled Effect (Biar ada garis muncul pas di-scroll)
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// 2. Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Ubah teks menu jadi 'Close' kalo kebuka
    if(navLinks.classList.contains('active')) {
        menuBtn.textContent = 'Close';
    } else {
        menuBtn.textContent = 'Menu';
    }
});

// 3. Close menu saat link diklik (Biar ga ganggu di HP)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.textContent = 'Menu';
    });
});