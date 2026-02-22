(() => {
  const btn = document.querySelector("[data-menu-button]");
  const drawer = document.querySelector("[data-drawer]");
  const overlay = document.querySelector("[data-overlay]");
  const closeBtn = document.querySelector("[data-drawer-close]");

  if (!btn || !drawer || !overlay) return;

  const open = () => {
    drawer.classList.add("is-open");
    overlay.hidden = false;
    btn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    drawer.classList.remove("is-open");
    overlay.hidden = true;
    btn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  btn.addEventListener("click", () => {
    const isOpen = drawer.classList.contains("is-open");
    isOpen ? close() : open();
  });

  overlay.addEventListener("click", close);

  if (closeBtn) closeBtn.addEventListener("click", close);

  drawer.querySelectorAll("a").forEach(a => a.addEventListener("click", close));

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
})();
