/* ===================== Camp Friends ===================== */

// --- Where signup emails should go. Change this to the camp organizer's address. ---
const CONTACT_EMAIL = 'toddfishman@gmail.com';

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- Scroll reveal ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

/* ---------- Gallery: video play-on-tap + image lightbox ---------- */
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbClose = document.getElementById('lbClose');

function openLightbox(src, alt) {
  lbImg.src = src;
  lbImg.alt = alt || '';
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  lbImg.src = '';
}
lbClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

document.querySelectorAll('.g-item').forEach((item) => {
  if (item.dataset.type === 'video') {
    const vid = item.querySelector('video');
    item.addEventListener('click', () => {
      if (vid.paused) {
        vid.play();
        item.classList.add('playing');
      } else {
        vid.pause();
        item.classList.remove('playing');
      }
    });
    vid.addEventListener('ended', () => item.classList.remove('playing'));
  } else {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      openLightbox(item.dataset.src || img.src, img.alt);
    });
  }
});

/* ---------- Signup form → real mailto (no fake success state) ---------- */
const form = document.getElementById('signupForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = (document.getElementById('name').value || '').trim();
  const email = (document.getElementById('email').value || '').trim();
  const place = (document.getElementById('place').value || '').trim();
  const kids = (document.getElementById('kids').value || '').trim();

  if (!name || !email) {
    if (!name) document.getElementById('name').focus();
    else document.getElementById('email').focus();
    return;
  }

  const subject = `Camp Friends — early access for ${place || 'my neighborhood'}`;
  const body =
    `Hi Camp Friends team,\n\n` +
    `I'd love to start a camp in my neighborhood.\n\n` +
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Neighborhood / city: ${place || '(not given)'}\n` +
    `Number of kids: ${kids || '(not given)'}\n\n` +
    `Thanks!`;

  window.location.href =
    `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
