// --- VERİ MERKEZİ: Karakter Bilgileri ---
const characters = [
    { 
        name: "GENÇ DAHİ", 
        type: "Deniz Anası, Mürekkep Balığı, Alaycı Kuş", 
        imgClass: "img-1",
        color: "#00f2ff" // Turkuaz aura
    },
    { 
        name: "SIAAL", 
        type: "Baykuş", 
        imgClass: "img-2",
        color: "#fdfd96" // Altın/Sarı aura
    },
    { 
        name: "VERNUU", 
        type: "Kuzgun", 
        imgClass: "img-3",
        color: "#ff3e3e" // Parlak Neon Kırmızı aura
    }
];

// --- KARAKTERLERİ OTOMATİK OLUŞTURMA VE DİZME ---
const charGrid = document.getElementById('char-grid');

characters.forEach(char => {
    // style="--aura-color: ${char.color}" satırı CSS'e karakterin rengini taşır
    const cardHTML = `
        <div class="character-card reveal" style="--aura-color: ${char.color}">
            <div class="char-img ${char.imgClass}"></div>
            <div class="char-info">
                <h3>${char.name}</h3>
                <p><span class="label">TÜR:</span>${char.type}</p>
            </div>
        </div>
    `;
    charGrid.innerHTML += cardHTML;
});


// --- 1. ÖZEL FARE İMLECİ HAREKETİ VE EFEKTLERİ ---
const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    requestAnimationFrame(() => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
});

function initInteractions() {
    const interactiveElements = document.querySelectorAll('.character-card, .glass-card, .main-title');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(2.5)';
            cursor.style.background = 'rgba(57, 255, 20, 0.1)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.background = 'transparent';
        });
    });
}

// --- 2. KAYDIRDIKÇA BELİRME (SCROLL REVEAL) EFEKTİ ---
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});

// Fonksiyonları çalıştır
initInteractions();
