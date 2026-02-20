(function () {
  // Mobile menu
  const btn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav');
  const menu = document.getElementById('site-menu');

  function closeMenu() {
    document.body.classList.remove('menu-open');
    btn?.setAttribute('aria-expanded', 'false');
  }

  btn?.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Close when clicking outside (mobile)
  document.addEventListener('click', (e) => {
    if (!document.body.classList.contains('menu-open')) return;
    const t = e.target;
    const inside = nav.contains(t);
    if (!inside) closeMenu();
  });

  // Close on navigation click (mobile)
  menu?.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (a) closeMenu();
  });

  // Lightweight click tracking (optional): logs to console only
  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-track]');
    if (!el) return;
    // You can replace this with GA/GTM later
    console.log('track:', el.getAttribute('data-track'));
  });
})();
