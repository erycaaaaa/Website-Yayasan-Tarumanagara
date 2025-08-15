// Opsi: auto-rotate + dukungan swipe (mobile)
document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('heroCarousel');
  if (!el) return;

  // Aktifkan carousel
  const carousel = new bootstrap.Carousel(el, {
    interval: 6000,   // ganti slide setiap 6 detik
    touch: true,
    ride: false,
    pause: 'hover',   // berhenti saat kursor di atas
    wrap: true
  });

  // (Opsional) Keyboard aksesibilitas untuk panah kiri/kanan
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft')  carousel.prev();
    if (e.key === 'ArrowRight') carousel.next();
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const y = String(new Date().getFullYear());
  const spanYear = document.getElementById('year');
  if (spanYear) spanYear.textContent = y;
  document.querySelectorAll('.year-copy').forEach(el => el.textContent = y);
});
