const cursor = document.querySelector('.custom-cursor');

// İmleci hareket ettir
document.addEventListener('mousemove', (e) => {
    // requestAnimationFrame kullanarak daha akıcı hale getirdik
    requestAnimationFrame(() => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
});

// Sayfaya girince göster, çıkınca gizle
document.addEventListener('mouseenter', () => cursor.style.opacity = "1");
document.addEventListener('mouseleave', () => cursor.style.opacity = "0");

// İnteraktif öğelerde imleci büyüt
const links = document.querySelectorAll('.card, .main-title');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(2.5)';
        cursor.style.background = 'rgba(57, 255, 20, 0.1)';
    });
    link.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.background = 'transparent';
    });
});

// Kaydırdıkça belirme efekti
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal-section').forEach(el => observer.observe(el));
