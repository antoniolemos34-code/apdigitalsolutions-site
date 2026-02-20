// =========================
// FILE: script.js
// PASTE AS: /script.js
// =========================
(function(){
  const btn = document.querySelector('.menu-btn');
  const menu = document.getElementById('site-menu');

  if (btn && menu){
    btn.addEventListener('click', () => {
      const open = menu.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        menu.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (e) => {
      if (!menu.classList.contains('is-open')) return;
      const within = menu.contains(e.target) || btn.contains(e.target);
      if (!within){
        menu.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Simple client-side click tracking (no backend, just for debugging)
  document.querySelectorAll('[data-track]').forEach(el => {
    el.addEventListener('click', () => {
      try{
        const key = 'ap_track_' + el.getAttribute('data-track');
        const n = Number(localStorage.getItem(key) || '0') + 1;
        localStorage.setItem(key, String(n));
      }catch(e){}
    });
  });
})();
