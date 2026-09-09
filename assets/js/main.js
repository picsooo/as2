/* ============================================================
   ESASOUD V2 — Main JS (Vanilla)
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  /* ---- Header scroll ---- */
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---- Mobile nav ---- */
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---- Hero slider ---- */
  const slides = document.querySelectorAll('.slide');
  const bars = document.querySelectorAll('.progress-bar');
  const counterCurrent = document.querySelector('.current-num');
  const counterTotal = document.querySelector('.total-num');
  let current = 0;
  let timer = null;
  const INTERVAL = 6000;

  function goToSlide(idx) {
    slides.forEach(s => s.classList.remove('active'));
    bars.forEach(b => b.classList.remove('active'));
    current = ((idx % slides.length) + slides.length) % slides.length;
    slides[current].classList.add('active');
    bars[current].classList.add('active');
    if (counterCurrent) counterCurrent.textContent = String(current + 1).padStart(2, '0');
  }

  function startAutoplay() {
    stopAutoplay();
    bars.forEach(b => { b.classList.remove('active'); void b.offsetWidth; });
    bars[current].classList.add('active');
    timer = setInterval(() => goToSlide(current + 1), INTERVAL);
  }

  function stopAutoplay() { if (timer) clearInterval(timer); }

  if (slides.length > 0) {
    if (counterTotal) counterTotal.textContent = String(slides.length).padStart(2, '0');
    goToSlide(0);
    startAutoplay();

    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    if (prevBtn) prevBtn.addEventListener('click', () => { goToSlide(current - 1); startAutoplay(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { goToSlide(current + 1); startAutoplay(); });

    bars.forEach((bar, i) => {
      bar.addEventListener('click', () => { goToSlide(i); startAutoplay(); });
    });

    const sliderEl = document.querySelector('.hero-slider');
    if (sliderEl) {
      sliderEl.addEventListener('mouseenter', stopAutoplay);
      sliderEl.addEventListener('mouseleave', startAutoplay);
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft')  { goToSlide(current - 1); startAutoplay(); }
      if (e.key === 'ArrowRight') { goToSlide(current + 1); startAutoplay(); }
    });
  }

  /* ---- Scroll reveal ---- */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveals = document.querySelectorAll('.reveal');

  if (!prefersReduced && reveals.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('visible'));
  }

  /* ---- Model selector ---- */
  document.querySelectorAll('.model-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.closest('.model-selector') || btn.parentElement;
      group.querySelectorAll('.model-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const model = btn.dataset.model;
      document.querySelectorAll('[data-spec-151i]').forEach(el => {
        el.textContent = model === '151i' ? el.dataset.spec151i : el.dataset.spec201i;
      });
    });
  });

  /* ---- Forms ---- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      contactForm.style.display = 'none';
      document.querySelector('.form-success').classList.add('show');
    });
  }

  const quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      quoteForm.style.display = 'none';
      document.getElementById('quoteSuccess').classList.add('show');
    });
  }

  /* ---- Smooth scroll ---- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
