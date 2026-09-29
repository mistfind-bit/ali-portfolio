document.getElementById('year').textContent = '© ' + new Date().getFullYear();

const observer = 'IntersectionObserver' in window
  ? new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 })
  : null;

document.querySelectorAll('.project,.mini-project,.process-grid>div,.closing').forEach(el => {
  el.classList.add('reveal');
  if (observer) observer.observe(el);
  else el.classList.add('visible');
});

document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', () => {
    img.classList.add('missing');
    img.alt = img.alt + '（圖片待上傳）';
  });
});