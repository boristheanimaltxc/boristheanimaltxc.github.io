// Fare hareketine göre arka plandaki ışığı hafifçe oynatır
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    // Başlığın hafifçe kayması (Paralaks efekti)
    const title = document.querySelector('.main-title');
    title.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
});
