(() => {
  const btn = document.querySelector("[data-menu-button]");
  const menu = document.querySelector("[data-menu]");
  const overlay = document.querySelector("[data-overlay]");

  if (!btn || !menu || !overlay) return;

  const open = () => {
    menu.classList.add("is-open");
    overlay.hidden = false;
    btn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    menu.classList.remove("is-open");
    overlay.hidden = true;
    btn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  btn.addEventListener("click", () => {
    const isOpen = menu.classList.contains("is-open");
    isOpen ? close() : open();
  });

  overlay.addEventListener("click", close);

  // close when clicking any NORMAL menu link (but NOT the Cities toggle button)
  menu.querySelectorAll("a").forEach(a => a.addEventListener("click", close));

  // close on ESC
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  // Cities toggle (submenu)
  const citiesToggle = menu.querySelector("[data-cities-toggle]");
  const citiesPanel = menu.querySelector("[data-cities]");
  if (citiesToggle && citiesPanel) {
    citiesToggle.addEventListener("click", () => {
      const expanded = citiesToggle.getAttribute("aria-expanded") === "true";
      citiesToggle.setAttribute("aria-expanded", String(!expanded));
      citiesPanel.hidden = expanded; // if expanded -> hide
    });
  }
})();
